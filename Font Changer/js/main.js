let select = document.getElementById("select-box");
select.addEventListener("click", () => {
  let text = document.querySelector("h2");
  text.style.fontFamily = select.value;
});
