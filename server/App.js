const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000 || process.env.PORT;

dotenv.config({path:"./config.env"});
require("./database/connect");

app.get("/", (req,res)=>{
    console.log("server connected");
    res.send("Hello server...");
});

app.get("/signUp", (req,res)=>{
    res.send("Sign Up page...");
});

app.get("/logIn", (req,res)=>{
    res.send("Login page...");
});

app.get("/todos", (req,res)=>{
    res.send("My Todos List page...");
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});