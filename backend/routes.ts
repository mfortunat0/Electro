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

const createNewUser = async (email: string, pass: string) => {
  return await prisma.users.create({
    data: {
      email,
      pass,
    },
  });
};
router.get("/", (req, res) => res.send("Hello"));
router.get("/users", async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmailPassword(email, password)
    .catch((error) => console.error(error))
    .finally(async () => {
      await prisma.$disconnect();
    });
  if (user) {
    res.json(user).status(200);
  } else {
    res
      .json({
        message: "User not found",
      })
      .status(404);
  }
});
router.post("/users", async (req, res) => {
  const { email, password } = req.body;
  const user = await createNewUser(email, password)
    .catch((error) => console.error(error))
    .finally(async () => {
      await prisma.$disconnect();
    });
  res.json(user).status(200);
});

export default router;
