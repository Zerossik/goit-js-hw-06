function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  btnEl: document.querySelector('.change-color'),
  spanEl: document.querySelector('.color'),
};
function handleChangeColor() {
  const resultColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = resultColor;
  refs.spanEl.textContent = resultColor;
}
refs.btnEl.addEventListener('click', handleChangeColor);
