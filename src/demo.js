import Instrument from './instrument';
import acousticGrandPiano from 'soundfonts/acoustic_grand_piano-mp3';

class AudioTagPlugin {
  play(sound, volume) {
    const audio = new Audio();
    audio.src = sound;
    audio.volume = volume / 127;
    // audio.loop = true
    audio.play();
  }
}

const instrument = new Instrument.fromMp3Soundfont(acousticGrandPiano);
const plugin = new AudioTagPlugin();

const notes = ['A0', 'A6', 'A2', 'C1', 'C4', 'D2'];

notes.forEach(function(value, index) {
  setTimeout(function() {
    plugin.play(instrument.getNote(value), 127);
  }, index * 1000)
});
