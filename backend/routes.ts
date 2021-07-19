import { Router } from "express";
import multer from "multer";
import { CreatePost, FindAllPost } from "./controllers/postController";
import { CreateUser, FindOneUser } from "./controllers/userController";
const uploadPost = multer({ dest: "./uploads/photo/post" });
const uploadProfile = multer({ dest: "./uploads/photo/profile" });
const router = Router();

router.get("/", (req, res) => res.send("Hello"));
router.get("/users", FindOneUser);
router.post("/users", uploadProfile.single("profilePhoto"), CreateUser);
router.get("/posts", FindAllPost);
router.post("/posts", uploadPost.single("postPhoto"), CreatePost);

export default router;
