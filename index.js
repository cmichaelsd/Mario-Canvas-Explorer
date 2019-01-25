// ==================== Canvas
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = sky;

// ==================== Animate
function animate() {
  // Rerender Logic
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  centerOfMario = column + 88;

  // Mario Facing Logic
  if (lastKeyRight) {
    // marioStillRight();
    marioRunningOneRight();
  } else {
    // marioStillLeft();
    marioRunningOneLeft();
  }

  // Jump Logic
  if (isJumping && startHeight > 50) {
    startHeight -= size;
  }
  if (isJumping && startHeight <= 50) {
    isJumping = false;
  }
  if (!isJumping && startHeight < 326) {
    startHeight += size;
  }
  // Create Ground
  blockIter();
}
animate();
