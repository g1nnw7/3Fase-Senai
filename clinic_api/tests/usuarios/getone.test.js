import { prismaClient } from "../../prisma/prisma";

test('Testar a busca por email', async () => {
    const email = String("ana@example.com");
    const usuario = await prismaClient.usuario.findUnique({
        where: { email },
    });
    expect(usuario).toContain(usuario.nome == "Thiago Atualizado")
});
