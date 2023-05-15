const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();



app.use(express.static('public'))

app.get("/omdb/:title", async (req, res)=>{




    const response = await fetch("https://www.omdbapi.com/?t="+req.params.title+"&apikey=" +process.env.API_KEY)

    const movie  =await response.json();

    res.json(movie);


})

app.listen(PORT, () => console.log('Now listening'));