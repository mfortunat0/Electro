import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

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
  const { title, description, company, value } = req.body.data;
  const post = await create(title, description, company, value);
  res.send(post);
};

const FindAllPost = async (req: Request, res: Response) => {
  const posts = await findAll();
  res.send(posts);
};

export { CreatePost, FindAllPost };
