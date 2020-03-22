import express, { Request, Response } from "express";

import fileRouter from './file'
import * as homeController from './../controllers/homeController'

const router = express.Router();

router.get("/", homeController.getHomePage);

router.use('/file', fileRouter)




export default router;