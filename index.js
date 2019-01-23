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
var column = 250;
var lastKeyRight = true;
var centerOfMario;

// Audio
var audio = new Audio("./theme.mp3");
audio.addEventListener(
  "ended",
  function() {
    this.currentTime = 0;
    this.play();
  },
  false
);
audio.play();

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
// Animate
function animate() {
  requestAnimationFrame(animate);
  centerOfMario = column + 88;
  c.clearRect(0, 0, innerWidth, innerHeight);
  if (lastKeyRight) {
    marioStillRight();
  } else {
    marioStillLeft();
  }
}
animate();
