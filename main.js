const char = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": " ",
};

const translateToMorse = (morse) =>
  morse.toLowerCase().split("").map(mapLetter).join(" ");
const translateToText = (morse) =>
  morse
    .split("   ")
    .map((word) => word.split(" ").map(changeToWords).join(""))
    .join(" ");

const mapLetter = (letter) => char[letter];

const changeToWords = (element) => {
  return Object.keys(char).find((key) => char[key] === element);
};

const writeOutput = () => {
  let message = document.getElementById("text").value;
  if (message[0].includes(".") || message[0].includes("-")) {
    return (document.getElementById("result").value = translateToText(message));
  }
  document.getElementById("result").value = translateToMorse(message);
};

document.getElementById("translate").addEventListener("click", writeOutput);
