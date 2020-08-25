const testBtn = document.getElementById("#testBtn");
testBtn.addEventListener("click", changeText );

function changeText () {
  testBtn.textContent = "Changed!";
}