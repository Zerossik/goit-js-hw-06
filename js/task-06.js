const inputEl = document.querySelector('#validation-input');
const data = Number(inputEl.dataset.length);

function ghangeBorderColor() {
  if (inputEl.value.length !== data) {
    inputEl.classList.add('invalid');
  }
  if (inputEl.value.length === data) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}

inputEl.addEventListener('blur', ghangeBorderColor);
