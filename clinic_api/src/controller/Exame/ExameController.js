import { prismaClient } from "../../../prisma/prisma.js";

class ExameController {
    constructor() { }
    async getTodosOsExames(_, res) {
        try {
            const exames = await prismaClient.exame.findMany();
            return res.json(exames)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getExamePorId(req, res) {
        try {
            const { params } = req
            const exame = await prismaClient.exame.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
            if (!exame) return res.status(404).send("exame não existe!")
            return res.json(exame)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarExame(req, res) {
        try {
            const { body } = req
            const exame = await prismaClient.exame.create({
                data: {
                    tipo_exame: body.tipo_exame,
                    resultado: body.resultado,
                    data_exame: new Date (body.data_exame),
                    link_arquivo: body.link_arquivo,
                    observacoes: body.observacoes,
                    paciente_id: body.paciente_id
                },
            })
            return res.status(201).json(exame)
        } catch (error) {
            console.error(error)
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar exame: Email já cadastrado!")
            }
        }
    }
    async atualizarExame(req, res) {
        try {
            const { body, params } = req
            if (body.tipo_exame || body.resultado || body.data_exame || body.link_arquivo || body.observacoes || body.paciente_id) {
                await prismaClient.exame.update({
                    where: { id: Number(params.id) },
                    data: {
                        ...body
                    },
                })

                const exameAtualizado = await prismaClient.exame.findUnique({
                    where: {
                        id: Number(params.id)
                    }
                })

                res.status(201).json({
                    message: "Usuário atualizado!",
                    data: exameAtualizado
                })
            } else {
                res.status(404).send("Atributos enviados não condizem com o schema")
            }
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("exame não existe no banco")
            }
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar exame: Email já cadastrado!")
            }
        }
    }
    async deletarExame(req, res) {
        const { params } = req
        try {
            const exameDeletado = await prismaClient.exame.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "exame deletado!",
                data: exameDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("exame não existe no banco")
            }
        }
    }
}

export const exameController = new ExameController();