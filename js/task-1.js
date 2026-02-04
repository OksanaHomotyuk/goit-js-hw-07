const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.querySelectorAll('.item').length}`);
[...categoriesList.querySelectorAll('.item')].forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});