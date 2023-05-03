const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");
console.log(`Número de categorías: ${categoryItems.length}`);
categoryItems.forEach((category) => {
const title = category.querySelector("h2").textContent;
const numberOfItems = category.querySelectorAll("li").length;
console.log(`Categoría: ${title}\nElementos: ${numberOfItems}`);
});
