"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const viewDirectory = path_1.default.join(__dirname, "views");
//setting body parser to read data from the request body
app.use(body_parser_1.default.urlencoded({ extended: false }));
//setting view engine
app.set("view engine", "ejs");
app.set("views", viewDirectory);
//setting the router
app.use(loginRoutes_1.router);
app.listen(3000, () => {
    console.log("Application listening at port 3000");
});
