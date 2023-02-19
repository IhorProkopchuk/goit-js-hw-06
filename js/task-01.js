const listRef = document.querySelector("#categories");
const catEl = listRef.querySelectorAll("li.item");
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
console.log("Number of categories: ", catEl.length);
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
catEl.forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
