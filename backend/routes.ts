import { Router } from "express";
import fs from "fs";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
const upload = multer({ dest: "./uploads/photo/post" });
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

const findAllPost = async () => {
  return await prisma.oferts.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
  });
};

const createNewPost = async (
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
  const { email, password, name } = req.body.data;
  const user = await createNewUser(email, password, name)
    .catch((error) => console.error(error))
    .finally(async () => {
      await prisma.$disconnect();
    });
  res.status(200).json(user);
});

router.get("/posts", async (req, res) => {
  const posts = await findAllPost();
  res.send(posts);
});

router.post("/posts", async (req, res) => {
  const { title, description, company, value } = req.body.data;
  const post = await createNewPost(title, description, company, value);
  res.send(post);
});

router.post("/photo/post", upload.single("postPhoto"), (req, res) => {
  if (req.file) {
    fs.renameSync(
      `./uploads/photo/post/${req.file.filename}`,
      `./uploads/photo/post/${req.file.filename}.jpg`
    );
  }
  res.send("Ok");
});

export default router;
