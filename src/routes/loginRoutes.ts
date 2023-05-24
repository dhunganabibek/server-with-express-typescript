import { Request, Response, Router } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.render("login");
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send(`Email:${email}  Password:${password} `);
});

export { router };
