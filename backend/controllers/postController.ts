import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

const create = async (
  title: string,
  description: string,
  company: string,
  value: number
) => {
  return await prisma.oferts.create({
    data: {
      company,
      description,
      title,
      value: Number(value),
      user_name: "admin",
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
  const { title, description, company, value } = req.body;
  const post = await create(title, description, company, value);
  if (req.file) {
    fs.renameSync(
      `./uploads/photo/post/${req.file.filename}`,
      `./uploads/photo/post/${post.id}.jpg`
    );
  }
  res.json(post);
};

const FindAllPost = async (req: Request, res: Response) => {
  const posts = await findAll();
  res.send(posts);
};

export { CreatePost, FindAllPost };
