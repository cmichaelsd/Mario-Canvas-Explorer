var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var red = "#f63911";
var brown = "#877000";
var tan = "#fc9838";

var size = 25;

// X and Y
var startHeight = 425;
var column = 50;
var prevColumn;

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      // moveUp();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      // DOWN
      break;
  }
};
function moveRight() {
  if (column + 11 * size < innerWidth) {
    column += size;
  }
}
function moveLeft() {
  if (column - 2 * size > 0) {
    column -= size;
  }
}
// Animate
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  // if (!prevColumn || prevColumn === column) {
  marioStillRight();
  // marioStillLeft();
  // }
  // prevColumn = column;
}
animate();
