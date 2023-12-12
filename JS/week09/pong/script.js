// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');
const playerPaddle = document.querySelector('.player-paddle');
const ball = document.querySelector('.ball');

// The y-position and velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 2;

// The y-position and velocity of the player paddle
let playerPaddleYPosition = 0;
const PLAYER_PADDLE_SPEED = 50; // Adjust this value for paddle speed

// The position and velocity of the ball
let ballXPosition = 0;
let ballYPosition = 0;
let ballXVelocity = 2;
let ballYVelocity = 2;

// Update the pong world
function update() {
    // Update the computer paddle's position to follow the ball
    if (ballYPosition + BALL_SIZE / 2 > computerPaddleYPosition + PADDLE_HEIGHT / 2) {
        computerPaddleYPosition += computerPaddleYVelocity;
    } else {
        computerPaddleYPosition -= computerPaddleYVelocity;
    }

    // Apply the y-position
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    // Update the player paddle's position with keyboard controls
    playerPaddleYPosition = Math.max(0, Math.min(GAME_AREA_HEIGHT - PADDLE_HEIGHT, playerPaddleYPosition));
    playerPaddle.style.top = `${playerPaddleYPosition}px`;

    // Update the ball's position
    ballXPosition = ballXPosition + ballXVelocity;
    ballYPosition = ballYPosition + ballYVelocity;

    // Apply the ball's position
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;

    // Check for collision with top and bottom edges
    if (ballYPosition <= 0 || ballYPosition >= GAME_AREA_HEIGHT - BALL_SIZE) {
        ballYVelocity *= -1;
    }

    // Check for collision with the computer paddle
    if (
        ballXPosition + BALL_SIZE >= GAME_AREA_WIDTH - PADDLE_WIDTH &&
        ballYPosition + BALL_SIZE >= computerPaddleYPosition &&
        ballYPosition <= computerPaddleYPosition + PADDLE_HEIGHT
    ) {
        ballXVelocity *= -1;
    }

    // Check for collision with the player paddle
    if (
        ballXPosition <= PADDLE_WIDTH &&
        ballYPosition + BALL_SIZE >= playerPaddleYPosition &&
        ballYPosition <= playerPaddleYPosition + PADDLE_HEIGHT
    ) {
        ballXVelocity *= -1;
    }

    // Check if the ball has hit the left or right edge
    if (ballXPosition <= 0 || ballXPosition >= GAME_AREA_WIDTH - BALL_SIZE) {
        // Reset the ball's position to the middle
        ballXPosition = GAME_AREA_WIDTH / 2 - BALL_SIZE / 2;
        ballYPosition = GAME_AREA_HEIGHT / 2 - BALL_SIZE / 2;
        ball.style.left = `${ballXPosition}px`;
        ball.style.top = `${ballYPosition}px`;

        // Reset the ball's velocity
        ballXVelocity = 2;
        ballYVelocity = 2;
    }
}

// Event listener for keyboard controls
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        playerPaddleYPosition -= PLAYER_PADDLE_SPEED;
    } else if (event.key === 'ArrowDown') {
        playerPaddleYPosition += PLAYER_PADDLE_SPEED;
    }
});

// Call the update() function every 35ms
setInterval(update, 10);
