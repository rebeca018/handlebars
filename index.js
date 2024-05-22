const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

var usuarios = [
    {
        nome: "Rebeca",
        endereco: "Rua Jair Abranches Mella, nº 2104"
    },
    {
        nome: "Fulano",
        endereco: "Rua XXXXXXXXXXX, nº ...."
    }
];

app.get("/", (req, res) =>{
    res.render("home", {usuarios});
});

app.get("/novo", (req, res) =>{
    res.render("formCadastro");
});

app.get("/usuario/:id", (req, res) =>{
    let usuario = {
       nome: "Rebeca",
       endereco: ""
    }

    res.render("usuario", usuario);
});

app.listen(8000, ()=>{
    console.log("Servidor executando")
});