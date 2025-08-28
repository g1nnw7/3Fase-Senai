import { prismaClient } from "../../../prisma/prisma.js";

class PacienteController {
    constructor() { }
    async getTodosOsPacientes(_, res) {
        try {
            const pacientes = await prismaClient.paciente.findMany();
            return res.json(pacientes)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getPacientePorId(req, res) {
        try {
            const { params } = req
            const paciente = await prismaClient.paciente.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
            if (!paciente) return res.status(404).send("paciente não existe!")
            return res.json(paciente)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarPaciente(req, res) {
        try {
            const { body } = req
            const paciente = await prismaClient.paciente.create({
                data: {
                    nome: body.nome,
                    cpf: body.cpf,
                    telefone: body.telefone,
                    email: body.email,
                    data_nascimento: new Date (body.data_nascimento),
                    sexo: body.sexo,
                    responsavel: body.responsavel
                },
            })
            return res.status(201).json(paciente)
        } catch (error) {
            console.error(error)
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!")
            }
        }
    }
    async atualizarPaciente(req, res) {
        try {
            const { body, params } = req
            if (body.nome || body.cpf || body.telefone || body.email || body.data_nascimento || body.sexo || body.responsavel) {
                await prismaClient.paciente.update({
                    where: { id: Number(params.id) },
                    data: {
                        ...body
                    },
                })

                const pacienteAtualizado = await prismaClient.paciente.findUnique({
                    where: {
                        id: Number(params.id)
                    }
                })

                res.status(201).json({
                    message: "Usuário atualizado!",
                    data: pacienteAtualizado
                })
            } else {
                res.status(404).send("Atributos enviados não condizem com o schema")
            }
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Paciente não existe no banco")
            }
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!")
            }
        }
    }
    async deletarPaciente(req, res) {
        const { params } = req
        try {
            const pacienteDeletado = await prismaClient.paciente.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "paciente deletado!",
                data: pacienteDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("paciente não existe no banco")
            }
        }
    }
}

export const pacienteController = new PacienteController();