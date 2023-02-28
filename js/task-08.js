const inputEl = document.querySelector('.login-form');

function handleValidationForm(event) {
  event.preventDefault();
  if (inputEl.elements.email.value === '' || inputEl.elements.password.value === '') {
    alert('Заповніть всі поля!');
    return;
  }

  const userData = {
    email: inputEl.elements.email.value,
    password: inputEl.elements.password.value,
  };

  console.log(userData);
  inputEl.reset();
}
inputEl.addEventListener('submit', handleValidationForm);
