const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
console.log(typeof inputEl.value);

function handleChangeInput() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
inputEl.addEventListener('input', handleChangeInput);
