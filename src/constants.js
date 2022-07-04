const GAME_SPEED = 50 //Швидкість
const DIRECTIONS = {  //Розиція
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    right: { x: 1, y: 0 },
    left: { x: -1, y: 0 },
}
let INITIAL_SNAKE_SIZE = 2 //Початковий розмір
let SNAKE_COLOR = 'yellow' //Розмір змійки
let DOT_COLOR = 'green'    //Розмір яблука

const DIRECTION_UP = 'up';
const DIRECTION_RIGHT = 'right';
const DIRECTION_DOWN = 'down';
const DIRECTION_LEFT = 'left';

module.exports = {
    GAME_SPEED,
    DIRECTIONS,
    INITIAL_SNAKE_SIZE,
    SNAKE_COLOR,
    DOT_COLOR,
    DIRECTION_UP,
    DIRECTION_RIGHT,
    DIRECTION_DOWN,
    DIRECTION_LEFT,
}
