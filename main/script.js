let canvas;
let canvasContext;
let ballPosX = 50;
let ballSpeedX = 10;

window.onload = function() {
    canvas = document.getElementById('game');
    canvasContext = canvas.getContext('2d');

    let framesPerSec = 60;
    setInterval(function(){
        drawAll();
        moveAll()
    }, 1000/framesPerSec);
};   

function moveAll(){
    ballPosX = ballPosX + ballSpeedX;
    if(ballPosX > canvas.width){
        ballSpeedX = -ballSpeedX;
    };
    if(ballPosX < 0){
        ballSpeedX = -ballSpeedX;
    };
};

function drawAll() {
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect(20, 210, 10, 100, 'white');
    colorCircle(ballPosX, 150, 10, 'white');
    
};

function colorCircle(centerX, centerY, radius, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
};

