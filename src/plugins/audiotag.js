export default class AudioTagPlugin {
  play(sound, volume) {
    const audio = new Audio();
    audio.src = sound;
    audio.volume = volume / 127;
    audio.play();
  }
}
