// Controller
import { prismaClient } from "../../../prisma/prisma.js";

class DeliveryController {
    constructor() { }

    async pegarTodosDelivery(_, res) {
        try {
            const deliverys = await prismaClient.delivery.findMany();
            return res.json(deliverys)
        }
        catch (e) {
            console.log(e)
        }
    }

    async pegarDeliveryPorID(req, res) {
        try {
            const delivery = await prismaClient.delivery.findUnique({
                where: {
                    id: Number(req.params.id),
                }
            });

            if (!delivery) {
                res.status(404).send("Erro ao procurar o delivery com o id informado")
            }
            return res.json(delivery)
        } catch (error) {
            console.log(error)
        }
    }

    async criarDelivery(req, res) {
        try {
            const { body } = req

            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "recipient_name" &&
                    key !== "recipient_address" &&
                    key !== "package_details" &&
                    key !== "status" &&
                    key !== "created_at" &&
                    key !== "updated_at" &&
                    key !== "driver_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const delivery = await prismaClient.delivery.create({
                data: {
                    ...body,
                    recipient_name: body.recipient_name,
                    recipient_adress: body.recipient_adress,
                    package_details: body.package_details,
                    status: body.status,
                    created_at: new Date(body.created_at),
                    updated_at: new Date(body.updated_at),
                    driver_id: body.driver_id
                },
            })
            return res.status(201).json(delivery)
        } catch (error) {
            console.error(error)
        }
    }
    async atualizarDelivery(req, res) {
        try {
            const { body, params } = req;
        
            const deliveryAtualizado = await prismaClient.delivery.update({
              where: { id_delivery: Number(params.id_delivery) },
              data: { ...body },
            });
        
            return res.status(200).json({
              message: "delivery atualizado!",
              data: deliveryAtualizado,
            });
          } catch (error) {
            console.error(" Erro ao atualizar delivery:", error);
        
            if (error.code == "P2025") {
              return res.status(404).send("delivery não existe no banco");
            }
            if (error.code === "P2002") {
              return res
                .status(400)
                .send("Falha ao cadastrar delivery: Email já cadastrado!");
            }
        
            return res.status(500).send("Erro inesperado no servidor");
          }
    }
    async deletarDelivery(req, res) {
        const { params } = req
        try {
            const deliveryDeletado = await prismaClient.delivery.delete({
                where: {
                    id_delivery: Number(params.id_delivery),
                },
            })
            res.status(200).json({
                message: "delivery deletado!",
                data: deliveryDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("delivery não existe no banco")
            }
        }
    }
}

export const deliveryController = new DeliveryController()