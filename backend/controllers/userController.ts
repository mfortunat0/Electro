import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import sharp from "sharp";
import path from "path";

const prisma = new PrismaClient();

const create = async (email: string, pass: string, name: string) => {
  return await prisma.users.create({
    data: {
      email,
      pass,
      name,
    },
  });
};

const findOne = async (email: string, pass: string) => {
  return await prisma.users.findFirst({
    where: {
      email,
      pass,
    },
  });
};

const CreateUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  if (req.file) {
    const user = await create(email, password, name)
      .catch((error) => console.error(error))
      .finally(async () => {
        await prisma.$disconnect();
      });
    await sharp(req.file.path)
      .resize(45, 45)
      .toFile(`./uploads/photo/profile/${user?.id}.jpg`);
    fs.unlinkSync(path.join(__dirname, "..", "..", req.file.path));
    res.status(200).json(user);
  } else {
    res.json().status(404);
  }
};

const FindOneUser = async (req: Request, res: Response) => {
  const { email, password } = req.query as { email: string; password: string };
  if (email && password) {
    const user = await findOne(email, password)
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
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

export { CreateUser, FindOneUser };
