document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      moveUp();
      break;
    case 39:
      moveRight();
      break;
  }
};

function moveRight() {
  lastKeyRight = true;
  if (centerOfMario + 8 * size < innerWidth) {
    column += size;
  }
}

function moveLeft() {
  lastKeyRight = false;
  if (centerOfMario - 6 * size > 0) {
    column -= size;
  }
}

function moveUp() {
  if (startHeight === 326) {
    if (!isJumping) {
      jump.play();
    }
    isJumping = true;
  }
}
