import { Request, Response } from "express";
import fs from "fs";

const UploadPostPhoto = (req: Request, res: Response) => {
  if (req.file) {
    fs.renameSync(
      `./uploads/photo/post/${req.file.filename}`,
      `./uploads/photo/post/${req.file.filename}.jpg`
    );
  }
  res.send("Ok");
};

export { UploadPostPhoto };
