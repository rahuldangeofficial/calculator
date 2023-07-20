/* eslint-disable no-unused-vars */
const primaryScreen = document.getElementById("primaryScreen");
const secondaryScreen = document.getElementById("secondaryScreen");

primaryScreen.innerText = "";
secondaryScreen.innerText = "";
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operation = "NULL";

function limitcheck() {
  if (
    primaryScreen.innerText.length > 12 ||
    secondaryScreen.innerText.length > 12
  ) {
    secondaryScreen.innerText = "";
    primaryScreen.innerText = "Limit Exceeds";
    return false;
  }
  return true;
}

function zero() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "0";
  }
}
function one() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "1";
  }
}
function two() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "2";
  }
}
function three() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "3";
  }
}
function four() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "4";
  }
}
function five() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "5";
  }
}
function six() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "6";
  }
}
function seven() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "7";
  }
}
function eight() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "8";
  }
}
function nine() {
  const flag = limitcheck();
  if (flag) {
    primaryScreen.innerText += "9";
  }
}
function add() {
  if (primaryScreen.innerText !== "") {
    firstNumber = parseInt(primaryScreen.innerText, 10);
    secondaryScreen.innerText = `${firstNumber}+`;
    primaryScreen.innerText = "";
    operation = "+";
  }
}
function subtract() {
  if (primaryScreen.innerText !== "") {
    firstNumber = parseInt(primaryScreen.innerText, 10);
    secondaryScreen.innerText = `${firstNumber}-`;
    primaryScreen.innerText = "";
    operation = "-";
  }
}
function multiply() {
  if (primaryScreen.innerText !== "") {
    firstNumber = parseInt(primaryScreen.innerText, 10);
    secondaryScreen.innerText = `${firstNumber}*`;
    primaryScreen.innerText = "";
    operation = "*";
  }
}
function divide() {
  if (primaryScreen.innerText !== "") {
    firstNumber = parseInt(primaryScreen.innerText, 10);
    secondaryScreen.innerText = `${firstNumber}/`;
    primaryScreen.innerText = "";
    operation = "/";
  }
}

function equal() {
  if (secondaryScreen.innerText !== "") {
    if (firstNumber !== "") {
      secondNumber = parseInt(primaryScreen.innerText, 10);
      if (operation === "+") {
        result = firstNumber + secondNumber;
        secondaryScreen.innerText = "";
        const flag = limitcheck();
        if (flag) {
          primaryScreen.innerText = result;
        }
      }
      if (operation === "-") {
        result = firstNumber - secondNumber;
        secondaryScreen.innerText = "";
        const flag = limitcheck();
        if (flag) {
          primaryScreen.innerText = result;
        }
      }
      if (operation === "*") {
        result = firstNumber * secondNumber;
        secondaryScreen.innerText = "";
        const flag = limitcheck();
        if (flag) {
          primaryScreen.innerText = result;
        }
      }
      if (operation === "/") {
        result = firstNumber / secondNumber;
        secondaryScreen.innerText = "";
        const flag = limitcheck();
        if (flag) {
          primaryScreen.innerText = result;
        }
      }
    }
  }
}

function clearScreen() {
  primaryScreen.innerText = "";
  secondaryScreen.innerText = "";
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  operation = "NULL";
}

function erase() {
  primaryScreen.innerText = primaryScreen.innerText.substring(
    0,
    primaryScreen.innerText.length - 1
  );
  if (primaryScreen.innerText === "") {
    secondaryScreen.innerText = "";
  }
}
