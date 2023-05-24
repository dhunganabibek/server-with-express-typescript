import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`<h1>Hello from express</h1>`);
});

export { router };
