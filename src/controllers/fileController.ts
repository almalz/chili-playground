// import multer from 'multer';
// const upload = multer({ dest: 'uploads/' })
import { textDetection } from "../api/googleVision";
import { File } from "formidable";
import fs from "fs";

export const uploadFile = async (file: File) => {
  const textResponse = await textDetection(file.path);
  console.log("POOP", textResponse);
  return textResponse;
};

export const clearResourceFile = async (filePath: string) => {
  fs.unlink("filePath", (err) => {
    if (err) throw err;
    console.log(`${filePath} was deleted`);
    return;
  });
};
