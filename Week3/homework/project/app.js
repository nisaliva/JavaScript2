'use strict';
// DOM elements declaration
const form = document.getElementById('form');
const bill = document.getElementById('bill');
const options = document.getElementById('options');
const people = document.getElementById('people');
const infoPrice = document.getElementById('infoPrice');
const infoEach = document.getElementById('infoEach');

form.addEventListener('submit', calculate); //The submit event triggers when the form is submitted.

function calculate(e) {
    e.preventDefault(); //Calling preventDefault() during any stage of event flow cancels the event,
    // It means that any default action normally taken by the implementation as a result of the event will not occur.

    let billValue = bill.value;
    let optionsValue = options.value;
    let peopleValue = people.value;
    let totalBill = (billValue * optionsValue) / 100;
    let billForOnePerson = totalBill / peopleValue;

    billForOnePerson = Math.floor(billForOnePerson * 100) / 100;
    infoPrice.textContent = billForOnePerson;

    if (!Number.parseInt(billValue)) return alert('Write your meal price as a number');
    if (peopleValue > 1) infoEach.textContent = `each`;
    if (peopleValue < 1) alert('Write positive value for people count');
}

