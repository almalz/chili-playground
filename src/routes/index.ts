import express, { Request, Response } from "express";
import { IncomingForm, File } from "formidable";
import * as fileController from "../controllers/fileController";
// import { __dirname } from "../config";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("./../views/index.hbs", {
    value: "World"
  });
});

router.post("/file", async (req: Request, res: Response) => {
  const form = new IncomingForm();
  form.parse(req);

  form.on("fileBegin", async (name: string, file: File) => {
    file.path = __dirname + "/resources/" + file.name;
    try {
      const fileResponse = await fileController.uploadFile(file);
      res.send(fileResponse);
    } catch (err) {
      console.log(err);
      res.send("fail");
    }
    res.redirect("/");
  });

});

export default router;