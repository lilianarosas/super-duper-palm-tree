function removeTransition(keyitem) {
    if (keyitem.propertyName !== 'transform') return;
    keyitem.target.classList.remove('playing');
  }

  function playSound(keyitem) {
    const audio = document.querySelector(`audio[data-key="${keyitem.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyitem.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);