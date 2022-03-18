let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.onMessage.addListener(function (m) {
    if (m.type === 'PlayAudio') {
      playAudio();
    }
  });
}

browser.runtime.onConnect.addListener(connected);

function playAudio() {
  const audio = document.getElementById('mySuperCustomAudioTag');
  audio.play();
}
