import express, { response } from 'express';
import { prismaClient } from '../prisma/prisma.js';

const app = express()
app.use(express.json())

app.get('/usuarios', async (request, response) => {
  try {
    const usuarios = await prismaClient.usuario.findMany();
    return response.json(usuarios)
  }
  catch (e) {
    console.log(e)
  }
});
app.get("/usuarios/:id", async (request, response) => {
  try {
    const id = Number(request.params.id);

    if (isNaN(id)) {
      return response.status(400).json({ error: "ID inválido" });
    }

    const usuario = await prismaClient.usuario.findUnique({
      where: {
        id: Number(request.params.id)
      }
    })

    if (!usuario) {
      return response.status(404).send("Usuário não encontrado");
    }

    return response.json(usuario)


  }
  catch (e) {
    console.log(e)
  }
})
app.post("/usuarios", async (req, res) => {
  try {
    const { body } = req
    const usuario = await prismaClient.usuario.create({
      data: {
        nome: body.nome,
        cargo: body.cargo,
        email: body.email,
        senha: body.senha
      },
    })
    return res.status(201).send(usuario)
  } catch (error) {
    console.error(error)
    if (error.code === "P2002") {
      res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
    }
  }
})
app.put("/usuarios/:id", async (req, res) => {
  try {
    const { body, params } = req

    if (body.nome || body.cargo || body.email || body.senha) {
      await prismaClient.usuario.update({
        where: { id: Number(params.id) },
        data: {
          ...body
        },
      })

      const usuarioAtualizado = await prismaClient.usuario.findUnique({
        where: {
          id: Number(params.id)
        }
      })

      res.status(201).json({
        message: "Usuário atualizado!",
        data: usuarioAtualizado
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
})
app.delete("/usuarios/:id", async (req, res) => {
  const { params } = req
  try {
    const usuarioDeletado = await prismaClient.usuario.delete({
      where: {
        id: Number(params.id),
      },
    })
    res.status(200).json({
      message: "Usuário deletado!",
      data: usuarioDeletado
    })
  } catch (error) {
    console.log(error)
  }
})
app.get('/pacientes', async (req, res) => {
  try {
    const pacientes = await prismaClient.paciente.findMany();
    return res.json(pacientes)
  }
  catch (e) {
    console.log(e)
  }
})
app.get("/pacientes/:id", async (request, response) => {
  try {
    const id = Number(request.params.id);

    if (isNaN(id)) {
      return response.status(400).json({ error: "ID inválido" });
    }

    const paciente = await prismaClient.paciente.findUnique({
      where: {
        id: Number(request.params.id)
      }
    })

    if (!paciente) {
      return response.status(404).send("Usuário não encontrado");
    }

    return response.json(paciente)


  }
  catch (e) {
    console.log(e)
  }
})
app.post('/pacientes', async (req, res) => {
  try {
    const { body } = req
    console.log(body)
    const paciente = await prismaClient.paciente.create({
      data: {
        nome: body.nome,
        cpf: body.cpf,
        telefone: body.telefone,
        email: body.email,
        data_nascimento: new Date(body.data_nascimento),
        sexo: body.sexo
      },
    })
    return res.status(201).send(paciente)
  }
  catch (e) {
    console.log(e)
    if (error.code === "P2002") {
      res.status(404).send("Falha ao cadastrar paciente: paciente já cadastrado!")
    }
  }
})
app.put("/pacientes/:id", async (req, res) => {
  try {
    const { body, params } = req

    if (body.nome || body.cpf || body.telefone || body.email || body.data_nascimento || body.sexo) {
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
      res.status(404).send("Usuário não existe no banco")
    }
    if (error.code === "P2002") {
      res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
    }
  }
})
app.delete("/pacientes/:id", async (req, res) => {
  const { params } = req
  try {
    const pacienteDeletado = await prismaClient.paciente.delete({
      where: {
        id: Number(params.id),
      },
    })
    res.status(200).json({
      message: "Usuário deletado!",
      data: pacienteDeletado
    })
  } catch (error) {
    console.log(error)
  }
})
app.get('/exames', async (req, res) => {
  try {
    const exames = await prismaClient.exame.findMany();
    return res.json(exames)
  }
  catch (e) {
    console.log(e)
  }
})
app.get("/exames/:id", async (request, response) => {
  try {
    const id = Number(request.params.id);

    if (isNaN(id)) {
      return response.status(400).json({ error: "ID inválido" });
    }

    const exame = await prismaClient.exame.findUnique({
      where: {
        id: Number(request.params.id)
      }
    })

    if (!exame) {
      return response.status(404).send("Usuário não encontrado");
    }

    return response.json(exame)


  }
  catch (e) {
    console.log(e)
  }
})
app.post('/exames', async (req, res) => {
  try {
    const { body } = req
    console.log(body)
    const exame = await prismaClient.exame.create({
      data: {
        tipo_exame: body.tipo_exame,
        resultado: body.resultado,
        data_exame: new Date(body.data_exame),
        link_arquivo: body.link_arquivo,
        observacoes: body.observacoes,
        paciente_id: body.paciente_id
      },
    })
    return res.status(201).send(exame)
  }
  catch (e) {
    console.log(e)
    if (e.code === "P2002") {
      res.status(404).send("Falha ao cadastrar exame: exame já cadastrado!")
    }
  }
})
app.put("/exames/:id", async (req, res) => {
  try {
    const { body, params } = req

    if (body.tipo_exame || body.resultado || body.data_exame || body.link_arquivo || body.observacoes) {
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
      res.status(404).send("Usuário não existe no banco")
    }
    if (error.code === "P2002") {
      res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
    }
  }
})
app.delete("/exames/:id", async (req, res) => {
  const { params } = req
  try {
    const exameDeletado = await prismaClient.exame.delete({
      where: {
        id: Number(params.id),
      },
    })
    res.status(200).json({
      message: "Usuário deletado!",
      data: exameDeletado
    })
  } catch (error) {
    console.log(error)
  }
})
app.listen(3000, () => console.log("Api rodando"))



