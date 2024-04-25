//=======Version 1 using decimal codes to show the Dice============

// const button = document.querySelector("button");
// const player1 = document.querySelector("#player1");
// const player2 = document.querySelector("#player2");
// const output = document.querySelector("#output");
// button.addEventListener("click", function () {
//   let rolls = [roll(6), roll(6)];
//   let message;

//   if (rolls[0] > rolls[1]) {
//     message = "Player 1 wins!";
//   } else if (rolls[0] === rolls[1]) {
//     message = "It's a Tie !";
//   } else {
//     message = "Player 2 wins !";
//   }
//   output.innerHTML = message;
//   player1.innerHTML = rolls[0];
//   player2.innerHTML = rolls[1];
// });
// function roll(num) {
//   let rNumber = Math.floor(Math.random() * num) + 1;
//   let n = 9855 + rNumber;
//   let char = "&#" + n + ";";
//   return char;
// }

//=======Version 2==================================================
const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const output = document.querySelector("#output");
const dice = [
  [5],
  [1, 9],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 3, 4, 6, 7, 9],
];
button.addEventListener("click", function () {
  let rolls = [roll(6), roll(6)];
  let message;
  if (rolls[0] > rolls[1]) {
    message = "Player 1 wins!";
  } else if (rolls[0] === rolls[1]) {
    message = "It's a Tie !";
  } else {
    message = "Player 2 wins !";
  }
  updateOutput(player1, roll[0]);
  updateOutput(player2, roll[1]);
  output.innerHTML = message;

  function updateOutput(el, num) {
    let holder = builder(num);
    if (el.children[0]) {
      el.children[0].remove();
    }
    el.appendChild(holder);
  }
});

function builder(num) {
  let div = document.createElement("div");
  let dieArray = dice[num - 1];
  for (let x = 1; x < 10; x++) {
    let span = document.createElement("div");
    span.setAttribute("class", "dot");
    if (dieArray.includes(x)) {
      span.classList.add("black");
    }
    div.appendChild(span);
  }
  div.setAttribute("class", "dicer");
  return div;
}

function roll(num) {
  let rNumber = Math.floor(Math.random() * num) + 1;
  return rNumber;
}
