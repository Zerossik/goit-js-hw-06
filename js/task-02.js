const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsEl = document.querySelector('#ingredients');
const colectionEl = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = document.createElement('li');
  ingredient.textContent = ingredients[i];
  ingredient.classList.add('item');
  colectionEl.push(ingredient);
}
ingredientsEl.prepend(...colectionEl);
