// Grab Canvas Element
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Starting position of Circle
var x = canvas.width / 2;
var y = canvas.height - 30;

var ballRadius = 10;

//Paddle Variables
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

// moves the circle every 10 mil this much 
var dx = 2;
var dy = -2;

// Event Listeners for moving the paddle left or right
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//  Functions for moving paddle;
function keyDownHandler(e) {
    if (e.key === "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.key === "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
// Draw Function every 10 miliseconds
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    // Makes the trail of the ball moving go away
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
        dy = -dy;
    }
    if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx;
    }
    if (rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    } else if (leftPressed) {
        paddleX -= 7;
        if (paddleX < 0) {
            paddleX = 0;
        }
    }
    x += dx;
    y += dy;
}







setInterval(draw, 10);