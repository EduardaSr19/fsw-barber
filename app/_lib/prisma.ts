// Esse arquivo garante que apenas uma instância do Prisma Client vai ser instanciada no servidor Next
// Quando salvar a aplicação/recompilar, não vai abrir multiplas conexões com o banco de dados

import { PrismaClient } from "@prisma/client"

declare global {
  // eslint-disable-next-line no-unused-vars
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
