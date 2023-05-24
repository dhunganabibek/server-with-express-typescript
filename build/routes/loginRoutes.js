"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
    <h2>You are logged In</h2>
    <a href="/logout">Logout</a>
    `);
    }
    else {
        res.send(`
    <h2>You are not logged In</h2>
    <a href="/login">Login</a>
    `);
    }
});
router.get("/login", (req, res) => {
    res.render("login");
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === "bibek@gmail.com" && password === "password") {
        //mark this person as logged in
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send("Invalid username or password");
    }
});
