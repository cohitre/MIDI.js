export default class Midi {
  constructor(instrument) {
    this.instrument = instrument;
  }

  setVolume(channel, volume, delay) {}
  noteOn(channel, note, velocity, delay) {}
  noteOff(channel, note, delay) {}
}
