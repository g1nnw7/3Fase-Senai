// Controller
import { prismaClient } from "../../../prisma/prisma.js";

class VehicleController {
    constructor() { }

    async pegarTodosVehicle(_, res) {
        try {
            const vehicles = await prismaClient.vehicle.findMany();
            return res.json(vehicles)
        }
        catch (e) {
            console.log(e)
        }
    }

    async pegarVehiclePorID(req, res) {
        try {
            const vehicle = await prismaClient.vehicle.findUnique({
                where: {
                    id_vehicle: Number(req.params.id_vehicle),
                }
            });

            if (!vehicle) {
                res.status(404).send("Erro ao procurar o vehicle com o id informado")
            }
            return res.json(vehicle)
        } catch (error) {
            console.log(error)
        }
    }

    async criarVehicle(req, res) {
        try {
            const { body } = req

            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "plate" &&
                    key !== "model_name" &&
                    key !== "year" &&
                    key !== "capacity_kg" &&
                    key !== "created_at" &&
                    key !== "updated_at" &&
                    key !== "driver_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const vehicle = await prismaClient.vehicle.create({
                data: {
                    ...body,
                    plate: body.plate,
                    model_name: body.model_name,
                    capacity_kg: body. capacity_kg,
                    created_at: new Date(body.created_at),
                    updated_at: new Date(body.updated_at),
                    driver_id: body.driver_id
                },
            })
            return res.status(201).json(vehicle)
        } catch (error) {
            console.error(error)
        }
    }
    async atualizarVehicle(req, res) {
        try {
            const { body, params } = req;
        
            const vehicleAtualizado = await prismaClient.vehicle.update({
              where: { id_vehicle: Number(params.id_vehicle) },
              data: { ...body },
            });
        
            return res.status(200).json({
              message: "vehicle atualizado!",
              data: vehicleAtualizado,
            });
          } catch (error) {
            console.error(" Erro ao atualizar vehicle:", error);
        
            if (error.code == "P2025") {
              return res.status(404).send("vehicle não existe no banco");
            }
            if (error.code === "P2002") {
              return res
                .status(400)
                .send("Falha ao cadastrar vehicle: Email já cadastrado!");
            }
        
            return res.status(500).send("Erro inesperado no servidor");
          }
    }
    async deletarVehicle(req, res) {
        const { params } = req
        try {
            const vehicleDeletado = await prismaClient.vehicle.delete({
                where: {
                    id_vehicle: Number(params.id_vehicle),
                },
            })
            res.status(200).json({
                message: "vehicle deletado!",
                data: vehicleDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("vehicle não existe no banco")
            }
        }
    }
}

export const vehicleController = new VehicleController()