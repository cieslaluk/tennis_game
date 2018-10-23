let canvas;
let canvasContext;
let ballPosX = 50;

window.onload = function() {
    canvas = document.getElementById('game');
    canvasContext = canvas.getContext('2d');
    
    let framesPerSec = 30;
    setInterval(drawAll, 1000/framesPerSec);
};   

function drawAll() {
ballPosX = ballPosX + 20;

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width, canvas.height);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 210, 200, 200)
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ballPosX,100,10,10);
    

};
