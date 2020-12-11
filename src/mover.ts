import * as p5 from "p5";

export class Mover {

    p:            p5;
    mass:         number;
    position:     p5.Vector;
    velocity:     p5.Vector;
    acceleration: p5.Vector;
    color:        p5.Color;

    constructor(p: p5, _x: number, _y: number, _m: number) {

        this.p            = p;
        this.mass         = _m; 
        this.position     = p.createVector(_x, _y);
        this.velocity     = p.createVector(1, 0);
        this.acceleration = p.createVector(0.0, 0.0);
        this.color        = p.color(p.random(100, 255), p.random(100, 255), p.random(100, 255));
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        // Reset acceleration in order to prevent incrementing forever
        this.acceleration.mult(0);
    }

    display() {
        this.p.stroke(0);
        this.p.strokeWeight(1);
        this.p.fill(this.color);
        this.p.ellipse(this.position.x, this.position.y, this.mass*8, this.mass*8);
    }

    applyForce(forceVec: p5.Vector) {
        // preserve the original force vector
        // Newtons second law (a = F/m)
        let forceVecCopy = p5.Vector.div(forceVec, this.mass);
        this.acceleration.add(forceVecCopy);
    }
}