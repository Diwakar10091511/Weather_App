const express=require("express");
const path=require("path");
const hbs=require("hbs");


const app=express();
let staticPath=path.join(__dirname,"../public");
let partialPath=path.join(__dirname,"../templates/partials");
let viewpath=path.join(__dirname,"../templates/views");
app.use(express.static(staticPath));

app.set("view engine","hbs");
app.set("views",viewpath);
hbs.registerPartials(partialPath);
app.get("/",(req,res)=>
{
    res.render("index.hbs");
});

app.get("/index2",(req,res)=>
{
    res.render("index2.hbs");
});
app.listen(8000);