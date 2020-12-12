var fs = require('fs')

var jokes = {}

jokes.getJokes          = function () {

    var joke            = fs.readFileSync(__dirname +'/jokes.txt', 'utf8')

    var jokesArray      = joke.split(/\r?\n/);

    return jokesArray;
}

module.exports = jokes;