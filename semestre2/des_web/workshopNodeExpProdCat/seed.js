import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [ //  id, nome, preco, descricao
      { nome: 'Produto Novo', preco: 10.99, descricao: "Produto de teste" },
    ],
  });
  console.log('Produto criado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
