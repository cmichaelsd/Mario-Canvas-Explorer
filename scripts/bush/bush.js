function bush() {
  var copyBushHeight = bushHeight;
  var copyBushCol = bushCol;
  // Rectangles
  // 1
  for (var i = 0; i <= 3; i++) {
    c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight, size, size);
  }
  bushCol -= size * 5;

  // 2
  for (var i = 0; i <= 5; i++) {
    c.fillStyle = lightGreen;
    if (i === 0 || i === 5) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size, size, size);
  }
  bushCol -= size * 8;

  // 3
  for (var i = 0; i <= 8; i++) {
    c.fillStyle = lightGreen;
    if (i < 2 || i === 8) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 2, size, size);
  }
  bushCol -= size * 10;

  // 4
  for (var i = 0; i <= 11; i++) {
    if (i === 10) {
      bushCol += size;
      continue;
    }
    c.fillStyle = lightGreen;
    if (i === 0 || i === 9 || i === 11) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 3, size, size);
  }
  bushCol -= size * 12;

  // 5
  for (var i = 0; i <= 12; i++) {
    c.fillStyle = lightGreen;
    if (i === 0 || i === 10 || i === 12) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 4, size, size);
  }
  bushCol -= size * 13;

  // 6
  for (var i = 0; i <= 13; i++) {
    c.fillStyle = lightGreen;
    if (i === 0 || i === 13) c.fillStyle = black;
    if (i === 7) c.fillStyle = darkGreen;
    c.fillRect((bushCol += size), bushHeight + size * 5, size, size);
  }
  bushCol -= size * 15;

  // 7
  for (var i = 0; i <= 14; i++) {
    c.fillStyle = lightGreen;
    if (i === 0 || i === 14) c.fillStyle = black;
    if (i === 4 || i === 5 || i === 9) c.fillStyle = darkGreen;
    c.fillRect((bushCol += size), bushHeight + size * 6, size, size);
  }
  bushCol -= size * 16;

  // 8
  for (var i = 0; i <= 15; i++) {
    c.fillStyle = lightGreen;
    if (i === 0 || i === 15) c.fillStyle = black;
    if (i === 4) c.fillStyle = darkGreen;
    c.fillRect((bushCol += size), bushHeight + size * 7, size, size);
  }
  bushCol -= size * 19;

  // 9
  for (var i = 0; i <= 22; i++) {
    if (i === 20 || i === 21) {
      bushCol += size;
      continue;
    }
    c.fillStyle = lightGreen;
    if (i < 3 || i === 19 || i === 22) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 8, size, size);
  }
  bushCol -= size * 24;

  // 10
  for (var i = 0; i <= 24; i++) {
    if (i === 21) {
      bushCol += size;
      continue;
    }
    c.fillStyle = lightGreen;
    if (i === 0 || i === 20 || i === 22 || i === 24) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 9, size, size);
  }
  bushCol -= size * 26;

  // 11
  for (var i = 0; i <= 25; i++) {
    c.fillStyle = lightGreen;
    if (i === 0 || i === 22 || i === 25) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 10, size, size);
  }
  bushCol -= size * 26;

  // 12
  for (var i = 0; i <= 27; i++) {
    if (i === 26) {
      bushCol += size;
      continue;
    }
    c.fillStyle = lightGreen;
    if (i === 0 || i === 25 || i === 27) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 11, size, size);
  }
  bushCol -= size * 30;

  // 13
  for (var i = 0; i <= 30; i++) {
    c.fillStyle = lightGreen;
    if (i < 2 || i === 28 || i === 30) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 12, size, size);
  }
  bushCol -= size * 32;

  // 14
  for (var i = 0; i <= 31; i++) {
    c.fillStyle = lightGreen;
    if (i === 0 || i === 31) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 13, size, size);
  }
  bushCol -= size * 32;

  // 15
  for (var i = 0; i <= 31; i++) {
    c.fillStyle = lightGreen;
    if (i === 0 || i === 31) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 14, size, size);
  }
  bushCol -= size * 31;

  // 16
  for (var i = 0; i <= 29; i++) {
    c.fillStyle = lightGreen;
    if (i === 0 || i === 29) c.fillStyle = black;
    c.fillRect((bushCol += size), bushHeight + size * 15, size, size);
  }
  bushCol = copyBushCol;
  bushHeight = copyBushHeight;
}
