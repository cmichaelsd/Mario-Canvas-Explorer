function marioJumpingLeft() {
  centerOfMario += 25;
  var copyStart = column;
  // Rectangles
  // 1
  for (var i = 0; i <= 10; i++) {
    if (i > 2) {
      column += size;
      continue;
    }
    c.fillStyle = tan;
    c.fillRect((column += size), startHeight, size, size);
  }
  column -= size * 11;

  // 2
  for (var i = 0; i <= 10; i++) {
    if (i === 3 || i === 4) {
      column += size;
      continue;
    }
    c.fillStyle = red;
    if (i < 3) {
      c.fillStyle = tan;
    }
    c.fillRect((column += size), startHeight + size, size, size);
  }
  column -= size * 11;

  // 3
  for (var i = 0; i <= 11; i++) {
    c.fillStyle = red;
    if (i < 2) {
      c.fillStyle = tan;
    }
    c.fillRect((column += size), startHeight + size * 2, size, size);
  }
  column -= size * 12;

  // 4
  for (var i = 0; i <= 11; i++) {
    if (i === 3) {
      column += size;
      continue;
    }
    c.fillStyle = brown;
    if (i === 4 || i === 6 || i === 7) {
      c.fillStyle = tan;
    }
    c.fillRect((column += size), startHeight + size * 3, size, size);
  }
  column -= size * 11;

  // 5
  column -= 25;
  for (var i = 0; i <= 12; i++) {
    c.fillStyle = tan;
    if (i < 3) {
      c.fillStyle = brown;
    }
    if (i === 5 || i === 9 || i === 11 || i === 12) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 4, size, size);
  }
  column -= size * 13;

  // 6
  for (var i = 0; i <= 12; i++) {
    c.fillStyle = tan;
    if (i === 0 || i === 4 || i === 8 || i === 9 || i === 11 || i === 12) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 5, size, size);
  }
  column -= size * 12;

  // 7
  for (var i = 0; i <= 11; i++) {
    c.fillStyle = tan;
    if (i < 5 || i === 9 || i === 10 || i === 11) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 6, size, size);
  }
  column -= size * 11;

  // 8
  for (var i = 0; i <= 8; i++) {
    c.fillStyle = tan;
    if (i === 0) {
      c.fillStyle = brown;
    }
    c.fillRect((column += size), startHeight + size * 7, size, size);
  }
  column -= size * 4;

  // 9
  column -= 100;
  for (var i = 0; i <= 11; i++) {
    c.fillStyle = brown;
    if (i === 1 || i === 5) {
      c.fillStyle = red;
    }
    c.fillRect((column += size), startHeight + size * 8, size, size);
  }
  column -= size * 15;

  // 10
  for (var i = 0; i <= 15; i++) {
    if (i === 1 || i === 2) {
      column += size;
      continue;
    }
    c.fillStyle = brown;
    if (i === 3 || i === 7) {
      c.fillStyle = red;
    }
    c.fillRect((column += size), startHeight + size * 9, size, size);
  }
  column -= size * 16;

  // 11
  for (var i = 0; i <= 16; i++) {
    if (i === 1 || i === 2) {
      column += size;
      continue;
    }
    c.fillStyle = brown;
    if (i === 15 || i === 16) {
      c.fillStyle = tan;
    }
    if (i === 3 || i === 4 || i === 5 || i === 6 || i === 7) {
      c.fillStyle = red;
    }
    c.fillRect((column += size), startHeight + size * 10, size, size);
  }
  column -= size * 17;

  // 12
  for (var i = 0; i <= 16; i++) {
    if (i === 13) {
      column += size;
      continue;
    }
    c.fillStyle = red;
    if (i === 0 || i === 1 || i === 10) c.fillStyle = brown;
    if (i === 3 || i === 6 || i === 14 || i === 15 || i === 16)
      c.fillStyle = tan;
    c.fillRect((column += size), startHeight + size * 11, size, size);
  }
  column -= size * 17;

  // 13
  for (var i = 0; i <= 15; i++) {
    if (i === 14) {
      column += size;
      continue;
    }
    c.fillStyle = red;
    if (i === 15) c.fillStyle = tan;
    if (i === 0 || i === 1 || i === 13) c.fillStyle = brown;
    c.fillRect((column += size), startHeight + size * 12, size, size);
  }
  column -= size * 16;

  // 14
  for (var i = 0; i <= 14; i++) {
    c.fillStyle = brown;
    if (i > 1) c.fillStyle = red;
    if (i === 12 || i === 13 || i === 14) c.fillStyle = brown;
    c.fillRect((column += size), startHeight + size * 13, size, size);
  }
  column -= size * 10;

  // 15
  for (var i = 0; i <= 10; i++) {
    c.fillStyle = red;
    if (i > 7) c.fillStyle = brown;
    c.fillRect((column += size), startHeight + size * 14, size, size);
  }
  column -= size * 8;

  // 16
  for (var i = 0; i <= 7; i++) {
    if (i === 5 || i === 6) {
      column += size;
      continue;
    }
    c.fillStyle = brown;
    if (i < 5) c.fillStyle = red;
    c.fillRect((column += size), startHeight + size * 15, size, size);
  }
  column = copyStart;
}
