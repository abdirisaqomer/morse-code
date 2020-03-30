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
    " ": " "
};

// First Function is to translate it from text to Morse
const fromLettersToMorse = textInput => {
    textInput.toLowerCase().split("").map(mapLetter).join(" ");
}

//This is from morse to letters
const fromMorseToLetters = morseInput => {
    morseInput.split(" ").map(changeToWordsReverse).join("");
}


const mapLetter = letter => char[letter];

//This is a fuction when inputed by the user it returs the value key from the array e.g "u" will return "..-"

const changeToWordsReverse = inputFromUser => {
    return Object.keys(char).find(key => char[key] === inputFromUser);
}

const writeOutput = () => {
    let message = document.getElementById("text").value;
    if (message[0].includes(".") || message[0].includes("-")) {
        return document.getElementById("result").value = fromMorseToLetters(message);
    } document.getElementById("result").value = fromLettersToMorse(message);
}

document.getElementById("translate").addEventListener("click", writeOutput);












