function setup() {
  createCanvas(400, 400);
  background(255); // white background
  strokeWeight(5); // brush thickness
}

function draw() {
  if (mouseIsPressed) {
    // Pick a random color for each stroke
    stroke(random(255), random(255), random(255));
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

// Optional: press any key to clear screen
function keyPressed() {
  background(255);
}