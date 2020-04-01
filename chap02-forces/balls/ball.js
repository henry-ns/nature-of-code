class Ball {
  constructor({ x, y, mass = 1 }) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);

    this.mass = mass;
    this.radius = sqrt(mass / PI) * 25;
  }

  edges() {
    const { x, y } = this.position;

    if (y >= height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    }

    if (x >= width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } 
    
    if (x <= this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    }
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acceleration.add(acc);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);

    const { x, y } = this.position;

    fill(255, 100);
    ellipse(x, y, this.radius * 2);
  }
}
