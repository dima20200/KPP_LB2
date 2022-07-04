let { Game } = require('./Game')
let { UserInterface } = require('./UserInterface')
let game = new Game(new UserInterface())

game.start()