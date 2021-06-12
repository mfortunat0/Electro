import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = Router();

const findUserByEmailPassword = async (email: string, pass: string) => {
  return await prisma.users.findFirst({
    where: {
      email,
      pass,
    },
  });
};

const createNewUser = async (email: string, pass: string, name: string) => {
  return await prisma.users.create({
    data: {
      email,
      pass,
      name,
    },
  });
};
router.get("/", (req, res) => res.send("Hello"));
router.get("/users", async (req, res) => {
  const { email, password } = req.query as { email: string; password: string };
  const user = await findUserByEmailPassword(email, password)
    .catch((error) => console.error(error))
    .finally(async () => {
      await prisma.$disconnect();
    });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
});
router.post("/users", async (req, res) => {
  const { email, password, name } = req.body;
  const user = await createNewUser(email, password, name)
    .catch((error) => console.error(error))
    .finally(async () => {
      await prisma.$disconnect();
    });
  res.status(200).json(user);
});

export default router;
