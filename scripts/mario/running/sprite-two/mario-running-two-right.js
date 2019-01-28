function marioRunningTwoRight() {
  var copyStart = column;
  // Rectangles
  // 1
  for (var i = 0; i <= 5; i++) {
    c.fillStyle = red;
    c.fillRect((column += size), startHeight, size, size);
  }
  column -= size * 6;

  // 2
  column -= 25;
  for (var i = 0; i <= 9; i++) {
    c.fillRect((column += size), startHeight + size, size, size);
  }
  column -= size * 10;

  // 3
  for (var i = 0; i <= 7; i++) {
    c.fillStyle = brown;
    if (i === 4 || i === 5 || i === 7) {
      c.fillStyle = tan;
    }
    c.fillRect((column += size), startHeight + size * 2, size, size);
  }
  column -= size * 8;

  // 4
  column -= 25;
  for (var i = 0; i <= 10; i++) {
    c.fillStyle = tan;
    if (i === 0 || i === 1 || i === 3 || i === 7) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 3, size, size);
  }
  column -= size * 11;

  // 5
  for (var i = 0; i <= 11; i++) {
    c.fillStyle = tan;
    if (i === 0 || i === 1 || i === 3 || i === 4 || i === 8) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 4, size, size);
  }
  column -= size * 12;

  // 6
  for (var i = 0; i <= 10; i++) {
    c.fillStyle = tan;
    if (
      i === 0 ||
      i === 1 ||
      i === 2 ||
      i === 7 ||
      i === 8 ||
      i === 9 ||
      i === 10
    ) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 5, size, size);
  }
  column -= size * 11;

  // 7
  column += 50;
  for (var i = 0; i <= 7; i++) {
    c.fillStyle = tan;
    c.fillRect((column += size), startHeight + size * 6, size, size);
  }
  column -= size * 8;

  // 8
  column -= 25;
  for (var i = 0; i <= 6; i++) {
    c.fillStyle = brown;
    if (i === 3) c.fillStyle = red;
    c.fillRect((column += size), startHeight + size * 7, size, size);
  }
  column -= size * 8;

  // 9
  for (var i = 0; i <= 8; i++) {
    c.fillStyle = brown;
    if (i === 5 || i === 6) {
      c.fillStyle = red;
    }
    c.fillRect((column += size), startHeight + size * 8, size, size);
  }
  column -= size * 9;

  // 10
  for (var i = 0; i <= 9; i++) {
    c.fillStyle = brown;
    if (i > 3) c.fillStyle = red;
    if (i === 6 || i === 9) c.fillStyle = tan;
    c.fillRect((column += size), startHeight + size * 9, size, size);
  }
  column -= size * 10;

  // 11
  for (var i = 0; i <= 9; i++) {
    c.fillStyle = brown;
    if (i > 4) c.fillStyle = red;
    c.fillRect((column += size), startHeight + size * 10, size, size);
  }
  column -= size * 10;

  // 12
  for (var i = 0; i <= 9; i++) {
    c.fillStyle = brown;
    if (i > 3) c.fillStyle = tan;
    if (i === 0 || i > 6) c.fillStyle = red;
    c.fillRect((column += size), startHeight + size * 11, size, size);
  }
  column -= size * 9;

  // 13
  for (var i = 0; i <= 7; i++) {
    c.fillStyle = red;
    if (i === 1 || i === 2) c.fillStyle = brown;
    if (i > 2 && i < 5) c.fillStyle = tan;
    c.fillRect((column += size), startHeight + size * 12, size, size);
  }
  column -= size * 7;

  // 14
  for (var i = 0; i <= 6; i++) {
    c.fillStyle = brown;
    if (i < 4) c.fillStyle = red;
    c.fillRect((column += size), startHeight + size * 13, size, size);
  }
  column -= size * 7;

  // 15
  for (var i = 0; i <= 7; i++) {
    c.fillStyle = brown;
    c.fillRect((column += size), startHeight + size * 14, size, size);
  }
  column -= size * 8;

  // 16
  for (var i = 0; i <= 4; i++) {
    c.fillStyle = brown;
    c.fillRect((column += size), startHeight + size * 15, size, size);
  }
  column = copyStart;
}
