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

  friction() {
    const diff = height - (this.position.y + this.radius);
    
    if(diff < 1) {
      const u = 0.1;
      const normal = this.mass * 0.1;

      const friction = this.velocity.copy();

      friction.normalize();
      friction.mult(-1 * u * normal);

      this.applyForce(friction);
    }
  }

  drag() {
    const drag = this.velocity.copy();

    drag.normalize();
    drag.mult(-1/2);

    const c = 0.1;
    const speed = this.velocity.magSq();

    drag.mult(c * speed);

    this.applyForce(drag);
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acceleration.add(acc);
  }

  update() {
    this.drag();
    this.friction();
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
