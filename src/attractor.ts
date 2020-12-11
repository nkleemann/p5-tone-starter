import * as p5 from "p5";

import { Mover } from "./mover";

export class Attractor {

    p:        p5;
    position: p5.Vector;
    mass:     number;
    G:        number;

    constructor(p: p5, xPosition: number, yPosition: number) {

        this.p          = p;

        this.position   = this.p.createVector(xPosition, yPosition);
        this.mass       = 10;
        this.G          = 2.4; 
    }

    display() {
        const p: p5 = this.p // for convenience

        p.ellipseMode(this.p.CENTER);
        p.strokeWeight(0);
        p.stroke(0);
        p.fill(0);
        p.ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
    }

    attract(mover: Mover) {
        // Direction of the force
        let force = p5.Vector.sub(this.position, mover.position);
        // Distance between attractor and mover
        let distance = force.mag();
        // Keep distance low enough so that we don't divide by 0 
        // or by a very small number making the outcome to big
        distance = this.p.constrain(distance, 5.0, 25.0);
        force.normalize();

        // Strength of the force
        let strength = (this.G * this.mass * mover.mass) / (distance * distance);
        force.mult(strength);

        return force;
    }
}