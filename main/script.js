var canvas;
var canvasContext;

window.onload = function() {
    canvas = document.getElementById('game');
    canvasContext = canvas.getContext('2d');
    drawAll();
};   

function drawAll() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width, canvas.height);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(225, 210, 200, 200)
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(canvas.width/2,200,50,25);
    

};
