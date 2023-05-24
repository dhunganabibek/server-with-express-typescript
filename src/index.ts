import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import path from "path";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";


const app = express();
const viewDirectory = path.join(__dirname, "views");

//setting body parser to read data from the request body
app.use(bodyParser.urlencoded({ extended: false }));

//setting view engine
app.set("view engine", "ejs");
app.set("views", viewDirectory);

//setting cookie session
app.use(cookieSession({keys: ['cookie']}));

//setting the router
app.use(router);

app.listen(3000, () => {
  console.log("Application listening at port 3000");
});
