const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) =>{
    res.render("home");
});

app.get("/novo", (req, res) =>{
    res.render("formCadastro");
});

app.get("/usuario/:id", (req, res) =>{
    res.render("usuario");
});

app.listen(8000, ()=>{
    console.log("Servidor executando")
});