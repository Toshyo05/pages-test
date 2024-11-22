
//board
let board;
let boardWidth = 360;
let boardHeight = 638;
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdIMG;

let bird = {
    x : birdX, 
    y : birdY, 
    width : birdWidth, 
    height : birdHeight
}

window.onload = function(){
    board = document.getElementById('board');
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    context.fillStyle = "green";
    context.fillRect(bird.x, bird.y, bird.width, bird.height);

    birdIMG = new Image();
    birdIMG.scr = "flappybird.png"
    bird.onload = function() {
        context.drawImage(birdIMG, bird.x, bird.y, bird.width, bird.height)
    }
}