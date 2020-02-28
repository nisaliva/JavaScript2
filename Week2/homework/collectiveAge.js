// 'use strict'

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];

function collectiveAges(allMembers) {
    const ageList = allMembers .map(allMembers  => allMembers.age);
    const totalAges = ageList.reduce((total, age) => total + age, 0);
    console.log(`The collective age of the HYF team is: ${totalAges}`)
}
collectiveAges(hackYourFutureMembers);