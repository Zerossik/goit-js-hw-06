const catigoriesEl = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${catigoriesEl.length}`);

const categoryCalc = catigoriesEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}
   Elements: ${item.lastElementChild.children.length}`);
});
