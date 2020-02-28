'use strict'
const down = document.querySelector('.down');
const up = document.querySelector('.up');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
let sessionLength = document.querySelector('.length');
let timeLeft = document.querySelector('.timer');//this will use to show how many time is left
let countdown = false; //this checks if the countdown has started

// increase set minutes 
function increaseLength() {
  if (!countdown) {
    if (parseInt(sessionLength.textContent) < 60) {
      sessionLength.textContent = parseInt(sessionLength.textContent) + 1;
      minuteDisplay(parseInt(sessionLength.textContent));
    } else {
      sessionLength.textContent = 59;
      minuteDisplay(parseInt(sessionLength.textContent));
    }
  } 
}

// decrease set minutes 
function decreaseLength() {
  if (!countdown) {
    if (parseInt(sessionLength.textContent) > 1) {
      sessionLength.textContent = parseInt(sessionLength.textContent) - 1;
      minuteDisplay(parseInt(sessionLength.textContent));
    } else {
      sessionLength.textContent = 1;
      minuteDisplay(parseInt(sessionLength.textContent));
    }
  } 
}
// this function is starting the timer
function startTimer() {
  if (!countdown) {
    // this clears any existing timers
    clearInterval(countdown);
    let seconds = parseInt(sessionLength.textContent) * 60;
    countdown = setInterval(function () {
      if (seconds > 0) {
        seconds--;
        timeLeft.textContent = timeDisplay(seconds);
      } else {
        timeLeft.textContent = 'Time is Up!' //it shows that the timer is "Time's Up!"
        clearInterval(countdown);
        countdown = false;
      }
    }, 1000);
  } 
}
// stop timer 
function stopTimer() {
  clearInterval(countdown);
  countdown = false;//this is activated during pause
}

//this function calculates seconds and minutes
function timeDisplay(seconds) {
  let minute = Math.floor(seconds / 60);
  let second = Math.floor(seconds % 60);
  return `${minute}:${second < 10 ? 0 : ''}${second}`
}


function minuteDisplay(minutes) {
  const display = `${minutes}:00`;
  timeLeft.textContent = display;
}

// on click function for all buttons
down.addEventListener('click', decreaseLength);

up.addEventListener('click', increaseLength);

play.addEventListener('click', startTimer);

pause.addEventListener('click', stopTimer);
