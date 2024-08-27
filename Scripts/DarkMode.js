document.getElementById("toggleButton").addEventListener("click", clickToChange);

function clickToChange() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}