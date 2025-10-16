// Controller
import { prismaClient } from "../../../prisma/prisma.js";

class DriverController {
    constructor() { }

    async pegarTodosDriver(_, res) {
        try {
            const drivers = await prismaClient.driver.findMany();
            return res.json(drivers)
        }
        catch (e) {
            console.log(e)
        }
    }

    async pegarDriverPorID(req, res) {
        try {
            const driver = await prismaClient.driver.findUnique({
                where: {
                    id: Number(req.params.id),
                }
            });

            if (!driver) {
                res.status(404).send("Erro ao procurar o driver com o id informado")
            }
            return res.json(driver)
        } catch (error) {
            console.log(error)
        }
    }

    async criarDriver(req, res) {
        try {
            const { body } = req

            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "cnh_number" &&
                    key !== "created_at" &&
                    key !== "updated_at" &&
                    key !== "status" &&
                    key !== "usuario_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const driver = await prismaClient.driver.create({
                data: {
                    ...body,
                    cnh_number: body.cnh_number,
                    usuario_id: body.usuario_id,
                    created_at: new Date(body.created_at),
                    updated_at: new Date(body.updated_at)
                },
            })
            return res.status(201).json(driver)
        } catch (error) {
            console.error(error)
        }
    }
    async atualizarDriver(req, res) {
        try {
            const { body, params } = req;
        
            const driverAtualizado = await prismaClient.driver.update({
              where: { id_driver: Number(params.id_driver) },
              data: { ...body },
            });
        
            return res.status(200).json({
              message: "Driver atualizado!",
              data: driverAtualizado,
            });
          } catch (error) {
            console.error(" Erro ao atualizar driver:", error);
        
            if (error.code == "P2025") {
              return res.status(404).send("driver não existe no banco");
            }
            if (error.code === "P2002") {
              return res
                .status(400)
                .send("Falha ao cadastrar driver: Email já cadastrado!");
            }
        
            return res.status(500).send("Erro inesperado no servidor");
          }
    }
    async deletarDriver(req, res) {
        const { params } = req
        try {
            const driverDeletado = await prismaClient.driver.delete({
                where: {
                    id_driver: Number(params.id_driver),
                },
            })
            res.status(200).json({
                message: "driver deletado!",
                data: driverDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("driver não existe no banco")
            }
        }
    }
}

export const driverController = new DriverController()