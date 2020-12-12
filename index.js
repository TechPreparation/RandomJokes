/**
 * Tushar Vengurlekar
 */
var jokesLib    = require('./lib/jokes')
var mathLib     = require('./lib/math')     

var app = {}

app.config = {
    'interval' : 1000
}

app.printJoke = function() {
    
    var allJokes = jokesLib.getJokes()

    var randomNumber = mathLib.getRandomNumber(1, allJokes.length)

    console.log(allJokes[randomNumber-1])
}

app.infiniteLoop = function () {
    setInterval(app.printJoke, app.config.interval)
}

app.infiniteLoop()