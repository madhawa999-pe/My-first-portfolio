
const texts = [
  "I'm Pabasara Madhawa,Welcome to my portfolio"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0; // restart the loop
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // wait before next word
  } else {
    setTimeout(type, 150); // typing speed
  }
}

type();

