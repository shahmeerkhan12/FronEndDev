// Creating the game logic
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
let obstacle_position = 700;
let playerPosition = 20;
let is_jumping = false;

// let move the obstacle from right to left

function move_obstacle() {
  obstacle_position -= 10;
  obstacle.style.left = `${obstacle_position}px`;

  if (obstacle_position < -30) {
    //reset the obstacle position, when it goes off the screen
    obstacle_position = 800;
  }
}

// check collision

function check_collision() {
  const player_rect = player.getBoundingClientRect();
  const obstacle_rect = obstacle.getBoundingClientRect();

  if (
    player_rect.top < obstacle_rect.bottom &&
    player_rect.bottom > obstacle_rect.top &&
    player_rect.left < obstacle_rect.right &&
    player_rect.right > obstacle_rect.left
  ) {
    // player hits the obstacle
    alert("Game Over!");
    obstacle_position = 800;
  }
}

// now listen the events
document.addEventListener("keydown", (e) => {
  if (e.key === " " && !is_jumping) {
    // checking that the player is not already jumping
    is_jumping = true;
    // disabling the smooth transition
    player.style.transition = "opacity 0.5s ease-in-out 0.2s";
    let jump_height = 150;
    // let the player make jump
    player.style.bottom = `${jump_height}px`;

    // the player gets back to the ground
    setTimeout(() => {
      // playerPosition = 20;
      player.style.bottom = `${playerPosition}px`;
      is_jumping = false;
    }, 500);
  }
});

// setInterval(check_collision, 10);

function gameLoop() {
  move_obstacle(); // Move the obstacle
  check_collision(); // Check for collisions
  // Update any other game logic

  // Request the next frame
  // donot include the parenthesis in the call back fun
  requestAnimationFrame(gameLoop);
}

// Start the game loop
// donot include the parenthesis in the call back fun

requestAnimationFrame(gameLoop);
