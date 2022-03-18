let myPort = browser.runtime.connect({ name: 'port-from-cs' });

myPort.onMessage.addListener(function (m) {
  console.log('In content script, received message from background script: ');
  console.log(m.greeting);
});

function playAudio() {
  myPort.postMessage({ type: 'PlayAudio' });
  document.removeEventListener('click', playAudio);
  alert('Are you sure about that!?');
}

document.addEventListener('click', playAudio);
