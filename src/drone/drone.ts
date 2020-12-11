import * as Tone from "tone";

export class Drone {

    noise:      Tone.Noise;
    autoFilter: Tone.AutoFilter;

    constructor() {

        this.noise = new Tone.Noise("brown").start();
        this.autoFilter = new Tone.AutoFilter({
            frequency: 0.01,
            baseFrequency: 50,
            octaves: 3

        }).toDestination();
        this.noise.connect(this.autoFilter);
    }

    startModulation() {
        this.autoFilter.start();
    }
}