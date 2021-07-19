import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

const create = async (
  title: string,
  description: string,
  company: string,
  value: number,
  userId: string,
  userName: string
) => {
  return await prisma.oferts.create({
    data: {
      company,
      description,
      title,
      value: Number(value),
      username: userName,
      userid: userId,
    },
  });
};

const findAll = async () => {
  return await prisma.oferts.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
  });
};

const CreatePost = async (req: Request, res: Response) => {
  const { title, description, company, value, userId, userName } = req.body;
  if (req.file) {
    const post = await create(
      title,
      description,
      company,
      value,
      userId,
      userName
    )
      .catch((error) => console.error(error))
      .finally(async () => {
        await prisma.$disconnect();
      });
    await sharp(req.file.path)
      .resize(312, 262)
      .toFile(`./uploads/photo/post/${post?.id}.jpg`);
    fs.unlinkSync(path.join(__dirname, "..", "..", req.file.path));
    res.json(post);
  }
  res.json().status(404);
};

const FindAllPost = async (req: Request, res: Response) => {
  const posts = await findAll();
  res.send(posts);
};

export { CreatePost, FindAllPost };
