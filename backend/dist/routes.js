"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var postController_1 = require("./controllers/postController");
var userController_1 = require("./controllers/userController");
var uploadPost = multer_1.default({ dest: "./uploads/photo/post" });
var uploadProfile = multer_1.default({ dest: "./uploads/photo/profile" });
var router = express_1.Router();
router.get("/", function (req, res) { return res.send("Hello"); });
router.get("/users", userController_1.FindOneUser);
router.post("/users", uploadProfile.single("profilePhoto"), userController_1.CreateUser);
router.get("/posts", postController_1.FindAllPost);
router.post("/posts", uploadPost.single("postPhoto"), postController_1.CreatePost);
exports.default = router;
