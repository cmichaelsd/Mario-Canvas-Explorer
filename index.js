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

  // Create Bush
  bush();

  // Mario Facing Logic
  if (lastKeyRight) {
    if (startHeight < 326) {
      marioJumpingRight();
    } else if (!keyPressed) {
      marioStillRight();
    } else {
      var frame = Math.trunc(Math.abs(column) / 100);
      if (prevEven !== frame && frame % 2 === 0) {
        prevEven = frame;
        marioRunningOneRight();
      } else if (frame % 2 !== 0) {
        marioRunningTwoRight();
      } else if (prevEven === frame && frame % 2 === 0) {
        marioRunningThreeRight();
      }
    }
  } else {
    if (startHeight < 326) {
      marioJumpingLeft();
    } else if (!keyPressed) {
      marioStillLeft();
    } else {
      var frame = Math.trunc(Math.abs(column) / 100);
      if (prevEven !== frame && frame % 2 === 0) {
        prevEven = frame;
        marioRunningOneLeft();
      } else if (frame % 2 !== 0) {
        marioRunningTwoLeft();
      } else if (prevEven === frame && frame % 2 === 0) {
        marioRunningThreeLeft();
      }
    }
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
  prevColumn = column;
}
animate();
