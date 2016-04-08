import Instrument from './instrument';
import AudioTagPlugin from './plugins/audiotag';
import acousticGrandPiano from 'soundfonts/acoustic_grand_piano-mp3';

const instrument = new Instrument.fromMp3Soundfont(acousticGrandPiano);
const plugin = new AudioTagPlugin();

['A0', 'A6', 'A2', 'C1', 'C4', 'D2']
  .forEach(function(note, index) {
    setTimeout(function() {
      plugin.play(instrument.getNote(note), 127);
    }, index * 1000);
  });
