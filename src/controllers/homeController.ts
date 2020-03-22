import express, { Request, Response } from "express";

export const getHomePage = (req: Request, res: Response) => {
  res.render("./../views/index.hbs", {
    value: "World"
  });
}