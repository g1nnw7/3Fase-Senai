import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  // await prisma.usuario.createMany({
  //   data: [
  //     { nome:"Joao", 
  //       email: "joao34@email.com", 
  //       senha: "123",
  //       cargo: "Médico"
  //     },
  //   ],
  // });
  await prisma.paciente.createMany({
    data: [{
      nome: "Alex",          
      cpf: "888231421",        
      telefone: 21421,     
      email: "alex@gmail.com",      
      data_nascimento:  new Date("1980-12-11"),
      sexo: "Masculino",
      responsavel: "" 
    }]
  })

  await prisma.exame.createMany({
    data: [{
      tipo_exame: "Endoscopia",
      resultado: "Bacteria",
      data_exame: new Date("1980-12-11"),
      link_arquivo: "discord.gg/link",
      observacoes: "",
      paciente_id: 1,
    }]
  })


  await prisma.prontuario.createMany({
    data: [{
      descricao: "Dor",
      data: new Date("1980-12-11"),
      medico_responsavel_id: 1,
      paciente_id: 1
    }]
  })


}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });




