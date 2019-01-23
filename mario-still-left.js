function marioStillLeft() {
  column /= 25;
  var copyStart = column;

  // Rectangles
  // 1
  for (var i = 5; i >= 0; i--) {
    c.fillStyle = red;
    c.fillRect((column -= size), startHeight, size, size);
  }
  column += size * 6;
}
