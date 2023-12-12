const btns = document.querySelectorAll(".btns button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    inp.type = e.target.value;
  });
});