let counterValue = 0;
const refs = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('#value'),
};

function changeValueDecrement() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}
function changeValueIncrement() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}

refs.btnDecrement.addEventListener('click', changeValueDecrement);
refs.btnIncrement.addEventListener('click', changeValueIncrement);
