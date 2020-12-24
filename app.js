const express = require('express');
const app = express();
const port = process.env.port || 8000;
const path = require('path');
const hbs = require('hbs');


//Public Path------------------ Static Page

const publicPath = path.join(__dirname,"/public");

// Setting views Path and Partials Path---------

const partialsPath = path.join(__dirname,"/partials")
app.set("view engine", "hbs");

hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

//-----------------------------



app.get("/", (req,res) => {
   res.render("index.hbs");
});

app.get("/about", (req, res) => {
    res.render("about.hbs");
});

app.get("/weather", (req, res) => {
    res.render("weather.hbs");
});

app.get("*",(req,res) => {
   res.render("404.hbs",{
       error:"Oops!Page not Found"
   });
});


app.listen(8000,(err) => {
    console.log(`Listening to Port ${port}`);
});