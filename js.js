let numb = document.getElementById("number");
let loc = document.getElementById("location");
const btn_1 = document.getElementById("plus");
const btn_2 = document.getElementById("minus");

let a = numb.nodeValue;

btn_1.addEventListener("click", function () {
  a = a + 1;
  numb.textContent = a;
  if (a >= 0) {
    numb.style.color = "#008000";
    loc.textContent = "Positive Number";
    loc.style.color = "#008000";
  }
});
btn_2.addEventListener("click", function () {
  a = a - 1;
  numb.textContent = a;
  if (a < 0) {
    numb.style.color = "#FF0000";
    loc.textContent = "Negative Number";
    loc.style.color = "#FF0000";
  }
});
