const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const exphbs = require('express-handlebars');

app.set('view engine', 'handlebars');


const hbs = exphbs.create({ });
app.use(express.static('public'))
app.engine('handlebars', hbs.engine);

app.get("/rendered/:title", async (req, res)=>{

    const response = await fetch("https://www.omdbapi.com/?t="+req.params.title+"&apikey=" +process.env.API_KEY)

    const movie  =await response.json();

    res.render("omdb", movie);


})

app.get("/api/omdb/:title", async (req, res)=>{

    const response = await fetch("https://www.omdbapi.com/?t="+req.params.title+"&apikey=" +process.env.API_KEY)

    const movie  =await response.json();

    res.json(movie);


})


app.listen(PORT, () => console.log('Now listening'));