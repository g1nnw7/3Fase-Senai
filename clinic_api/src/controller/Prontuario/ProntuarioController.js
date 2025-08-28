import { prismaClient } from "../../../prisma/prisma.js";

class ProntuarioController {
    constructor() { }
    async getTodosOsProntuarios(_, res) {
        try {
            const prontuarios = await prismaClient.prontuario.findMany();
            return res.json(prontuarios)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getProntuarioPorId(req, res) {
        try {
            const { params } = req
            const prontuario = await prismaClient.prontuario.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
            if (!prontuario) return res.status(404).send("Prontuario não existe!")
            return res.json(prontuario)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarProntuario(req, res) {
        try {
            const { body } = req
            const prontuario = await prismaClient.prontuario.create({
                data: {
                    descricao: body.descricao,
                    data: new Date(body.data),
                    medico_responsavel_id: body.medico_responsavel_id,
                    paciente_id: body.paciente_id
                },
            })
            return res.status(201).json(prontuario)
        } catch (error) {
            console.error(error)
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
            }
        }
    }
    async atualizarProntuario(req, res) {
        try {
            const { body, params } = req
            if (body.descricao || body.data || body.medico_responsavel_id || body.paciente_id) {
                await prismaClient.prontuario.update({
                    where: { id: Number(params.id) },
                    data: {
                        ...body
                    },
                })

                const prontuarioAtualizado = await prismaClient.prontuario.findUnique({
                    where: {
                        id: Number(params.id)
                    }
                })

                res.status(201).json({
                    message: "Usuário atualizado!",
                    data: prontuarioAtualizado
                })
            } else {
                res.status(404).send("Atributos enviados não condizem com o schema")
            }
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Usuário não existe no banco")
            }
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
            }
        }
    }
    async deletarProntuario(req, res) {
        const { params } = req
        try {
            const prontuarioDeletado = await prismaClient.prontuario.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Prontuario deletado!",
                data: prontuarioDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Prontuario não existe no banco")
            }
        }
    }
}

export const prontuarioController = new ProntuarioController();