// Завдання:
// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку на button.change-color і виводить значення кольору 
// в span.color.


const btnEl = document.querySelector(".change-color");
const clrEl = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  clrEl.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
