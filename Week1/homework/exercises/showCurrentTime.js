'use strict'

function currentTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

setInterval(startTime, 1000 );

const body = document.querySelector('body');
let myClock = document.createElement('div');
body.appendChild(myClock);

function startTime(){ 

    let myDate = new Date();
    let hour = myDate.getHours();
    let minute = currentTime(myDate.getMinutes()); 
    let second = currentTime(myDate.getSeconds()); 
    myClock.innerHTML = hour + ":" + minute + ":" + second; 
}
