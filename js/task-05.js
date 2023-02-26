const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function changeSpanEl() {
  if (inputEl.value === '') {
    spanEl.textContent = 'Anonymous';
    return;
  }
  spanEl.textContent = inputEl.value;
}
inputEl.addEventListener('input', changeSpanEl);
