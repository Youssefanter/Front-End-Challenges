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
let number = document.querySelector(".number");
let plus = document.querySelector(".plus");
minus.addEventListener("click", () => {
  let text = document.querySelector("p");
  number.innerHTML--;
  console.log(number);
  text.style.fontSize = `${number.innerHTML}px`;
});
plus.addEventListener("click", () => {
  let text = document.querySelector("p");
  number.innerHTML++;
  console.log(number);
  text.style.fontSize = `${number.innerHTML}px`;
});

let invert = document.querySelector(".invert");
invert.addEventListener("click", () => {
  let text = document.querySelector(".text");
  let p = document.querySelector("p");

  if (p.style.backgroundColor === "white") {
    p.style.backgroundColor = "black";
    p.style.color = "white";
  } else {
    p.style.backgroundColor = "white";
    p.style.color = "black";
  }
});
