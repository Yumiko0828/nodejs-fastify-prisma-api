import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "info",
    },
  ],
});

prisma
  .$connect()
  .then(() => {
    console.log("Connected with MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

export { prisma };
