// ==================== Create ground block

function block() {
  var copyBlockCol = blockCol;
  var copyBlockHeight = blockHeight;

  // 1
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickWhite;
    if (i === 0 || i === 11 || i === 16) {
      c.fillStyle = brickBrown;
    }
    if (i === 10) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 2
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 11) {
      c.fillStyle = brickWhite;
    }
    if (i === 10 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 3
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 11) {
      c.fillStyle = brickWhite;
    }
    if (i === 10 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 4
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 11) {
      c.fillStyle = brickWhite;
    }
    if (i === 10 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 5
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 11) {
      c.fillStyle = brickWhite;
    }
    if (i === 10 || i === 12 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 6
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 12) {
      c.fillStyle = brickWhite;
    }
    if (i === 10 || i === 12 || i === 13 || i === 14 || i === 15) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 7
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 11 || i === 12 || i === 13 || i === 14 || i === 15) {
      c.fillStyle = brickWhite;
    }
    if (i === 10 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 8
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 11) {
      c.fillStyle = brickWhite;
    }
    if (i === 10 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 9
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 11) {
      c.fillStyle = brickWhite;
    }
    if (i === 10 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 10
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 11) {
      c.fillStyle = brickWhite;
    }
    if (i === 10 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 11
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 10) {
      c.fillStyle = brickWhite;
    }
    if (i === 0 || i === 1 || i === 9 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 12
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 1 || i === 10) {
      c.fillStyle = brickWhite;
    }
    if (i === 2 || i === 3 || i === 9 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 13
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 2 || i === 3 || i === 9) {
      c.fillStyle = brickWhite;
    }
    if (i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 14
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 4 || i === 5 || i === 6 || i === 7 || i === 9) {
      c.fillStyle = brickWhite;
    }
    if (i === 8 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 15
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBrown;
    if (i === 0 || i === 9) {
      c.fillStyle = brickWhite;
    }
    if (i === 8 || i === 15 || i === 16) {
      c.fillStyle = brickBlack;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight += size;

  // 16
  for (var i = 0; i <= 16; i++) {
    c.fillStyle = brickBlack;
    if (i === 0 || i === 8 || i === 16) {
      c.fillStyle = brickBrown;
    }
    if (i === 9) {
      c.fillStyle = brickWhite;
    }
    c.fillRect((blockCol += size), blockHeight, size, size);
  }
  blockCol = copyBlockCol;
  blockHeight = copyBlockHeight;
}

function blockIter() {
  var copyCol = blockCol;
  var copyHeight = blockHeight;
  for (var i = 0; i <= 4; i++) {
    block();
    blockCol += size * 16;
  }
  blockCol = copyCol;
  blockHeight = copyHeight;
}
