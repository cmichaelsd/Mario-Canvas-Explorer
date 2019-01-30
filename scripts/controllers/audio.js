// ==================== Theme
var theme = new Audio("../../audio/theme.mp3");
theme.volume = 0.15;
theme.addEventListener(
  "ended",
  function() {
    this.currentTime = 0;
    this.play();
  },
  false
);
theme.play();

// ==================== Jump
var jump = new Audio("../../audio/jump.mp3");
jump.volume = 0.3;
