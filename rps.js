let choice = ["rock", "scissor", "paper"];
const $myPoint = document.querySelector(".myPoint");
const $robotPoint = document.querySelector(".robotPoint");
const $urDun = document.querySelector(".urDun");
const $choice1 = document.querySelector(".choice1");
const $choice2 = document.querySelector(".choice2");

const $rock = document.getElementById("rock");
const $paper = document.getElementById("paper");
const $scissor = document.getElementById("scissor");
let myChoice;
let robotChoice;

function start(params) {
  myPoint = 0;
  robotPoint = 0;
  $myPoint.innerHTML = myPoint;
  $robotPoint.innerHTML = robotPoint;
  setTimeout(() => {
    $urDun.innerHTML = " hi";
  }, 3000);
}
start();

function robot(params) {
  let r = Math.floor(Math.random() * 3);
  robotChoice = choice[r];
  console.log(robotChoice);
}

function rock(params) {
  $urDun.innerHTML = "";
  myChoice = choice[0];
  console.log("myChoi = ", myChoice);
  $choice1.innerHTML = myChoice;
  robot();
  $choice2.innerHTML = robotChoice;
  urDun();
}

function scissor(params) {
  $urDun.innerHTML = "";
  myChoice = choice[1];
  console.log("myChoi = ", myChoice);
  $choice1.innerHTML = myChoice;
  robot();
  $choice2.innerHTML = robotChoice;
  urDun();
}

function paper(params) {
  $urDun.innerHTML = "";
  myChoice = choice[2];
  console.log("myChoi = ", myChoice);
  $choice1.innerHTML = myChoice;
  robot();
  $choice2.innerHTML = robotChoice;
  urDun();
}

$rock.addEventListener("click", rock);
$paper.addEventListener("click", paper);
$scissor.addEventListener("click", scissor);

function urDun(params) {
  if (myChoice == "rock" && robotChoice == "scissor") {
    console.log("WIN");
    setTimeout(() => {
      $urDun.innerHTML = "WIN";
    }, 2000);
    myPoint++;
  } else if (myChoice == "rock" && robotChoice == "paper") {
    console.log("LOSE");
    setTimeout(() => {
      $urDun.innerHTML = "LOSE";
    }, 2000);
    robotPoint++;
  } else if (myChoice == "paper" && robotChoice == "rock") {
    console.log("WIN");
    setTimeout(() => {
      $urDun.innerHTML = "WIN";
    }, 2000);
    myPoint++;
  } else if (myChoice == "paper" && robotChoice == "scissor") {
    console.log("LOSE");
    setTimeout(() => {
      $urDun.innerHTML = "LOSE";
    }, 2000);
    robotPoint++;
  } else if (myChoice == "scissor" && robotChoice == "paper") {
    console.log("WIN");
    setTimeout(() => {
      $urDun.innerHTML = "WIN";
    }, 2000);
    myPoint++;
  } else if (myChoice == "scissor" && robotChoice == "rock") {
    console.log("LOSE");
    setTimeout(() => {
      $urDun.innerHTML = "LOSE";
    }, 2000);
    robotPoint++;
  } else {
    console.log("DRAW");
    setTimeout(() => {
      $urDun.innerHTML = "DRAW";
    }, 2000);
  }

  console.log("my point = ", myPoint);
  console.log("robot point = ", robotPoint);
  $myPoint.innerHTML = myPoint;
  $robotPoint.innerHTML = robotPoint;

  if (myPoint > 2 || robotPoint > 2) {
    alert("Төгсөв");
    start();
  }
}
