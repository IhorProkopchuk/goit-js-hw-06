// Завдання:

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const inputText = document.querySelector("#validation-input");
const textLength = Number(inputText.getAttribute("data-length"));

inputText.addEventListener("blur", () => {
  if (inputText.value.length === textLength) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});
