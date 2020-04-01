let balls = [];

function setup() {
  createCanvas(600, 600);

  const y = height / 2;

  const ballA = new Ball({ y, x: 200, mass: 1 });
  const ballB = new Ball({ y, x: 400, mass: 5 });

  balls.push(ballA, ballB);
}

function draw() {
  background(0);
  
  const gravity = createVector(0, 0.2);
  
  balls.forEach(ball => {
    if(mouseIsPressed) {
      const wind = createVector(0.1, 0);
      ball.applyForce(wind);
    }
  
    const weight = p5.Vector.mult(gravity, ball.mass);

    ball.applyForce(weight);
    ball.update();
    ball.edges();
    ball.show();
  });
}
