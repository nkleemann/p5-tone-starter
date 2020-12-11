import * as p5   from "p5";
import * as Tone from "tone";

import { Attractor } from "./attractor";
import { Mover }     from "./mover";
import { Drone }     from "./drone/drone";


// aural
let drone: Drone;

// visual
let attractor:          Attractor;
let movers:             Mover[];
let gravitationalForce: p5.Vector;

var sketch = function(p: p5) {

  p.setup = function() {
    
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);

    // audiocontext shizzle
    canvas.mouseClicked(function() { 
      Tone.start(); 
    });

    drone = new Drone();
    drone.startModulation();

    attractor = new Attractor(p, p.windowWidth/2,p.windowHeight/2);
    movers = [];
    gravitationalForce = p.createVector(0, 0);

    for (let i = 0; i < 100; i++) {
      let m = new Mover(p, p.random(0, 600), p.random(120, 150), 0.5);
      movers.push(m);
    }
  };

  p.draw = function() {
    p.background(240);
    p.fill(0);
    p.text("click inside the canvas to start audio playback", 40, 40);

    attractor.display();

    for (let j = 0; j < 100; j++) {
      gravitationalForce = attractor.attract(movers[j]);
      movers[j].applyForce(gravitationalForce);
      movers[j].update();

      movers[j].display();
    }
  };
};

new p5(sketch);
