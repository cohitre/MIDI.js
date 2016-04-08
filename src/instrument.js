export default class Instrument {
  static fromMp3Soundfont(soundfont) {
    return new Instrument(soundfont);
  }

  constructor(soundfont) {
    this.soundfont = soundfont;
  }

  getNote(note) {
    return this.soundfont[note];
  }
}
