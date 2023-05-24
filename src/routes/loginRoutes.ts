import { Request, Response, Router } from "express";


const router = Router();



router.get('/', (req:Request, res:Response) => {
  if(req.session && req.session.loggedIn){
    res.send(`
    <h2>You are logged In</h2>
    <a href="/logout">Logout</a>
    `);
  }
  else{
    res.send(`
    <h2>You are not logged In</h2>
    <a href="/login">Login</a>
    `);
  }

});

router.get("/login", (req: Request, res: Response) => {
  res.render("login");
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if(email && password && email ==="bibek@gmail.com" && password === "password"){
    //mark this person as logged in
    req.session = {loggedIn: true};
    res.redirect('/');
  }
  else{
    res.send("Invalid username or password");
  }
});

export { router };
