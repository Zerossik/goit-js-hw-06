const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

function handleChangeInput() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
inputEl.addEventListener('input', handleChangeInput);
