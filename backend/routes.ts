import { Router } from "express";
import multer from "multer";
import { UploadPostPhoto } from "./controllers/uploadController";
import { CreatePost, FindAllPost } from "./controllers/postController";
import { CreateUser, FindOneUser } from "./controllers/userController";
const upload = multer({ dest: "./uploads/photo/post" });
const router = Router();

router.get("/", (req, res) => res.send("Hello"));
router.get("/users", FindOneUser);
router.post("/users", CreateUser);
router.get("/posts", FindAllPost);
router.post("/posts", CreatePost);
router.post("/photo/post", upload.single("postPhoto"), UploadPostPhoto);

export default router;
