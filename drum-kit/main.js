window.addEventListener('keydown', ({ keyCode }) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener('click', (e) => {
  const domElement = e.target;
  const dataKey = domElement.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

  const key = document.querySelector(`.key[data-key="${dataKey}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('transitionend', removePlaying);
});

function removePlaying(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
