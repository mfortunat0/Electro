import { Router } from "express";
import multer from "multer";
import { CreatePost, FindAllPost } from "./controllers/postController";
import { CreateUser, FindOneUser } from "./controllers/userController";
const upload = multer({ dest: "./uploads/photo/post" });
const router = Router();

router.get("/", (req, res) => res.send("Hello"));
router.get("/users", FindOneUser);
router.post("/users", CreateUser);
router.get("/posts", FindAllPost);
router.post("/posts", upload.single("postPhoto"), CreatePost);

export default router;
