class Mover {
  constructor(x, y, mass) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    // this.velocity = createVector(0, 0);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(5);

    this.mass = mass;
    this.radius = sqrt(mass / PI) * 4;
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
    const { x, y } = this.position;

    fill(255);
    ellipse(x, y, this.radius * 2);
  }
}
