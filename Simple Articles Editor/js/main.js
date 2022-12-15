let select = document.getElementById("select-box");
select.addEventListener("click", () => {
  let text = document.querySelector("p");
  text.style.fontFamily = select.value;
});

let bold = document.querySelector(".bold");
bold.addEventListener("click", () => {
  let text = document.querySelector("p");
  console.log(text.style.fontWeight);
  if (text.style.fontWeight == "bold") {
    text.style.fontWeight = "normal";
  } else {
    text.style.fontWeight = "Bold";
  }
});

let minus = document.querySelector(".minus");
let number = document.querySelector(".number");
let plus = document.querySelector(".plus");
minus.addEventListener("click", () => {});
plus.addEventListener("click", () => {});
