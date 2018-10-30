
let canvas;
let canvasContext;
let ballPosX = 50;
let ballPosY = 50;
let ballSpeedX = 10;
let ballSpeedY = 5;
let paddlePlayerY = 250;
let paddleComputerY = 250;
let playerScore = 0;
let computerScore = 0;
let winningCondition = 3;
let showWinScreen = false;
const paddleHeight = 100;
const paddleThickness = 10;

function calculateMousePos(evt){
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseX = evt.clientX - rect.left - root.scrollLeft;
    let mouseY = evt.clientY - rect.top - root.scrollTop;
    return{
        x:mouseX,
        y:mouseY
    };
};

window.onload = function() {
    canvas = document.getElementById('game');
    canvasContext = canvas.getContext('2d');
    canvasContext.font ="50px Arial";

    let framesPerSec = 60;
    setInterval(function(){
        drawAll();
        moveAll();
    }, 1000/framesPerSec);

    canvas.addEventListener('mousemove', 
    function(evt){
        let mousePos = calculateMousePos(evt);
        paddlePlayerY = mousePos.y-(paddleHeight/2);
    });
};   

function ballReset(){
    if(playerScore >= winningCondition || computerScore >= winningCondition){
        playerScore = 0;
        computerScore = 0;
        showWinScreen = true;
    };
    ballSpeedX = -ballSpeedX;
    ballPosX = canvas.width/2;
    ballPosY = canvas.height/2;
};

function computerMovement(){
    let paddleComputerCenter = paddleComputerY + (paddleHeight/2); 
    if (paddleComputerCenter < ballPosY-35){
        paddleComputerY += 7;
    } else if (paddleComputerCenter > ballPosY+35){
        paddleComputerY -= 7;
    };
};

function moveAll(){
    if(showWinScreen){
        return;
    };
computerMovement();

    ballPosX += ballSpeedX;

    if(ballPosX > canvas.width){
        if (ballPosY > paddleComputerY && ballPosY < paddleComputerY + paddleHeight){
            ballSpeedX = -ballSpeedX;
            
            let deltaY = ballPosY - (paddleComputerY + paddleHeight/2);
            ballSpeedY = deltaY*0.35;
            }else {
                playerScore++; 
                ballReset();
            };
    };
    if(ballPosX < 0){
        if (ballPosY > paddlePlayerY && ballPosY < paddlePlayerY + paddleHeight){
        ballSpeedX = -ballSpeedX;

        let deltaY = ballPosY - (paddlePlayerY + paddleHeight/2);
        ballSpeedY = deltaY*0.35;
        } else {
            computerScore++;
             ballReset();
        };
    };
    
    ballPosY += ballSpeedY;
    if(ballPosY > canvas.height){
        ballSpeedY = -ballSpeedY;
    };
    if(ballPosY < 0){
        ballSpeedY = -ballSpeedY;
    };
};

function drawAll() {
  
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    if(showWinScreen){
        canvasContext.fillStyle = "white";
        canvasContext.fillText("Click to continue", 100, 100);
        return;
    };

    colorRect(0, paddlePlayerY, paddleThickness, 100, 'white');

    colorRect(canvas.width-paddleThickness, paddleComputerY, paddleThickness, 100, 'white');

    colorCircle(ballPosX, ballPosY, 10, 'white');

    canvasContext.fillText(playerScore, 100, 100);
    canvasContext.fillText(computerScore, canvas.width-100, 100);
    
};

function colorCircle(centerX, centerY, radius, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
};

function colorRect(leftX, topY, width, height, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
};

