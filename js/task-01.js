const categoriesList = document.querySelector('ul#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
const categoryTitle = categoryItem.firstElementChild.textContent;
const subItems = categoryItem.querySelectorAll('li');

console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${subItems.length}`);
});