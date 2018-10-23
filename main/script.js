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
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width, canvas.height);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(20, 210, 10, 100)
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ballPosX,100,10,10);
    

};
