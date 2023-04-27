const categoriesList = document.querySelector("categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
categoriesItems.forEach((categoryItem) => {
const title = categoryItem.querySelector("h2").textContent;
const articles = categoryItem.querySelectorAll("li").length;