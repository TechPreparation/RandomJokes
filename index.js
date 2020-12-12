/**
 * Tushar Vengurlekar
 */
var jokesLib = require('./lib/jokes')

var app = {}

app.getRandomJokes = function() {
    
    var jokes = jokesLib.getJokes()

    console.log(jokes)
}


app.getRandomJokes()