function setup() {
  createCanvas(windowWidth, windowHeight);
  background(235,214,1);

  // For the Bigger Circles
  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) {
      fill(0,0,0);
      ellipse(x, y, 30);
    }
  }
  // For the smaller circles
  for (let y = 0; y < height; y += 50) {
    for (let x = 0; x < width; x += 50) {
      fill(0,0,0);
      ellipse(x, y, 10);
    }
  }
  // For the bigger circles in second alternate rows
  for (let y = 50; y < height; y += 100) {
    for (let x = 50; x < width; x += 100) {
      fill(0,0,0);
      ellipse(x, y, 30);
    }
  }

}
function draw() {
}
