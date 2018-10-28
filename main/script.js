
let canvas;
let canvasContext;
let ballPosX = 50;
let ballPosY = 50;
let ballSpeedX = 10;
let ballSpeedY = 5;
let paddlePlayerY = 250;
let paddleComputerY = 250;
const paddleHeight = 100;

function calculateMousePos(evt){
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseX = evt.clientX - rect.left - root.scrollLeft;
    let mouseY = evt.clientY - rect.top - root.scrollTop;
    return{
        x:mouseX,
        y:mouseY
    }
}

window.onload = function() {
    canvas = document.getElementById('game');
    canvasContext = canvas.getContext('2d');

    let framesPerSec = 60;
    setInterval(function(){
        drawAll();
        moveAll()
    }, 1000/framesPerSec);

    canvas.addEventListener('mousemove', 
    function(evt){
        let mousePos = calculateMousePos(evt);
        paddlePlayerY = mousePos.y-(paddleHeight/2);
    });
};   

function ballReset(){
    ballSpeedX = -ballSpeedX;
    ballPosX = canvas.width/2;
    ballPosY = canvas.height/2;
}

function moveAll(){
    ballPosX = ballPosX + ballSpeedX;
    if(ballPosX > canvas.width){
        ballSpeedX = -ballSpeedX;
    };
    if(ballPosX < 0){
        if (ballPosY > paddlePlayerY && ballPosY < paddlePlayerY+paddleHeight){
        ballSpeedX = -ballSpeedX;
        }
        else
        {
             ballReset();
        }
    
       
       
    };

    ballPosY = ballPosY + ballSpeedY;
    if(ballPosY > canvas.height){
        ballSpeedY = -ballSpeedY;
    };
    if(ballPosY < 0){
        ballSpeedY = -ballSpeedY;
    };


};

function drawAll() {

    colorRect(0, 0, canvas.width, canvas.height, 'black');

    colorRect(10, paddlePlayerY, 10, 100, 'white');

    colorRect(780, paddleComputerY, 10, 100, 'white');

    colorCircle(ballPosX, ballPosY, 10, 'white');

    
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

