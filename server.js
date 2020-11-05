const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");

//allows you to parse body of http request
app.use(bodyParser.urlencoded({ extended: false }))

// these two lines are hit any time a request ismade to the web server
app.use(bodyParser.json())



//sets up route 
app.get('/', (req, res) => {
  res.send('welcome to data representation and querying!');
})
//changes url
app.get('/hello/:name', (req, res) => {
  console.log(req.params.name);
  res.send('hello' + req.params.name);
  //represents the http request being passed by browser and the respone

})
//sends movie data back to server
app.get('/api/movies', (req, res) => {

  //goes to html page 
  app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');

  })



  const mymovies = [

    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/m/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"

    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"


    }
  ];

  res.json({ movies: mymovies });

});
//sets up web server


//takes firt and last name 
app.get('/name', (req, res) => {
  res.send('hello' + req.query.fname + ' ' + req.query.lname);

})

//listens for post request going into name
app.post('/name', (req, res) => {
  res.send('hello' + req.body.fname + ' ' + req.body.lname);

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

