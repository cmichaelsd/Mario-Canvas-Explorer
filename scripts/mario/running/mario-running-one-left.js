function marioRunningOneLeft() {
  centerOfMario -= 25;
  var copyStart = column;
  var startHeightCopy = startHeight;
  // Rectangles
  // Move down one row
  startHeight += size;
  // 1
  for (var i = 0; i <= 5; i++) {
    c.fillStyle = red;
    c.fillRect((column += size), startHeight, size, size);
  }
  column -= size * 6;

  // 2
  column -= 75;
  for (var i = 0; i <= 9; i++) {
    c.fillRect((column += size), startHeight + size, size, size);
  }
  column -= size * 8;

  // 3
  for (var i = 0; i <= 7; i++) {
    c.fillStyle = brown;
    if (i === 0 || i === 2 || i === 3) {
      c.fillStyle = tan;
    }
    c.fillRect((column += size), startHeight + size * 2, size, size);
  }
  column -= size * 9;

  // 4
  column -= 25;
  for (var i = 0; i <= 10; i++) {
    c.fillStyle = tan;
    if (i === 3 || i === 7 || i === 9 || i === 10) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 3, size, size);
  }
  column -= size * 12;

  // 5
  for (var i = 0; i <= 11; i++) {
    c.fillStyle = tan;
    if (i === 3 || i === 7 || i === 8 || i === 10 || i === 11) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 4, size, size);
  }
  column -= size * 11;

  // 6
  for (var i = 0; i <= 10; i++) {
    c.fillStyle = tan;
    if (
      i === 0 ||
      i === 1 ||
      i === 2 ||
      i === 3 ||
      i === 8 ||
      i === 9 ||
      i === 10
    ) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 5, size, size);
  }
  column -= size * 12;

  // 7
  column += 50;
  for (var i = 0; i <= 7; i++) {
    c.fillStyle = tan;
    c.fillRect((column += size), startHeight + size * 6, size, size);
  }
  column -= size * 5;

  // 8
  column -= 75;
  for (var i = 0; i <= 8; i++) {
    if (i === 1) {
      column += size;
      continue;
    }
    c.fillStyle = brown;
    if (i === 3) c.fillStyle = red;
    if (i === 0) c.fillStyle = tan;
    c.fillRect((column += size), startHeight + size * 7, size, size);
  }
  column -= size * 9;

  // 9
  column -= 25;
  for (var i = 0; i <= 10; i++) {
    c.fillStyle = brown;
    if (i === 0 || i === 1 || i === 2 || i === 10) {
      c.fillStyle = tan;
    }
    c.fillRect((column += size), startHeight + size * 8, size, size);
  }
  column -= size * 11;

  // 10
  column += 25;
  for (var i = 0; i <= 10; i++) {
    c.fillStyle = brown;
    if (i === 0 || i === 1 || i === 9 || i === 10) {
      c.fillStyle = tan;
    }
    if (i === 8) c.fillStyle = red;
    c.fillRect((column += size), startHeight + size * 9, size, size);
  }
  column -= size * 10;

  // 11
  for (var i = 0; i <= 9; i++) {
    c.fillStyle = red;
    if (i === 8 || i === 9) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 10, size, size);
  }
  column -= size * 10;

  // 12
  for (var i = 0; i <= 9; i++) {
    c.fillStyle = red;
    if (i === 9) c.fillStyle = brown;
    c.fillRect((column += size), startHeight + size * 11, size, size);
  }
  column -= size * 9;

  // 13
  for (var i = 0; i <= 8; i++) {
    if (i === 4) {
      column += size;
    }
    c.fillStyle = red;
    if (i === 7 || i === 8) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 12, size, size);
  }
  column -= size * 9;

  // 14
  for (var i = 0; i <= 8; i++) {
    if (i === 4 || i === 5 || i === 6 || i === 7) {
      column += size;
      continue;
    }
    c.fillStyle = brown;
    c.fillRect((column += size), startHeight + size * 13, size, size);
  }
  column -= size * 9;

  // 15
  column -= 25;
  for (var i = 0; i <= 4; i++) {
    c.fillStyle = brown;
    c.fillRect((column += size), startHeight + size * 14, size, size);
  }
  startHeight = startHeightCopy;
  column = copyStart;
}
