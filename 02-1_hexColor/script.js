// V.01
/*
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexBtn = document.querySelector(".hexBtn");
const bodyBcg = document.querySelector("body");
const hex = document.querySelector(".hex");

hexBtn.addEventListener("click", getHex);

function getHex() {
  let hexCol = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    //console.log(random);
    hexCol += hexNumbers[random];
    //console.log(hexCol);
  }

  bodyBcg.style.backgroundColor = hexCol;
  //hex.innerHTML = hexCol;
  hex.textContent = hexCol;
}
*/

// V.02
const colors = ["green ", "red", "rgba(1233,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
