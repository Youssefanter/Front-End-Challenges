let select = document.getElementById("select-box");
select.addEventListener("click", () => {
  let text = document.querySelector("p");
  text.style.fontFamily = select.value;
});

let bold = document.querySelector(".bold");
bold.addEventListener("click", () => {
  let text = document.querySelector("p");
  if (text.style.fontWeight == "bold") {
    text.style.fontWeight = "normal";
  } else {
    text.style.fontWeight = "Bold";
  }
});

let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
minus.addEventListener("click", () => {
  let div = document.querySelector(".number");
  let text = document.querySelector("p");
  let number = div.textContent;
  let intNumber = parseInt(number);
  intNumber--;
  div.textContent = intNumber;
  text.style.fontSize = `${intNumber}px`;
});
plus.addEventListener("click", () => {
  let div = document.querySelector(".number");
  let text = document.querySelector("p");
  let number = div.textContent;
  let intNumber = parseInt(number);
  intNumber++;
  div.textContent = intNumber;
  text.style.fontSize = `${intNumber}px`;
});
let invert = document.querySelector(".invert");

invert.addEventListener("click", () => {
  document.querySelector("p").classList.toggle("dark");
});
