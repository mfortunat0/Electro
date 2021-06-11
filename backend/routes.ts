import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = Router();

const findUserByEmailPassword = async (email: string, password: string) => {
  prisma.$connect();
};

router.get("/", (req, res) => res.send("Hello"));
router.get("/users", (req, res) => {});
router.post("/users", (req, res) => {});

export default router;
