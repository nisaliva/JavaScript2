'use strict'

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];
  
  const main = document.getElementById('main');

  const title = document.createElement('h1');
  title.textContent = 'My Favorite Hobbies';
  title.style = 'width: 500px; color: red; border: 3px solid black; text-align: center';

  const myList = document.createElement('ul');
  myList.style = 'font-size:25px';
  
  main.appendChild(title);
  main.appendChild(myList);
  
  myHobbies.forEach(hobby => {
    const li = document.createElement('li');
    li.textContent = hobby;
    myList.appendChild(li);
  });