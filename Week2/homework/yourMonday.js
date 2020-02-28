'use strict'

const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];

const rate = 25;

const calculateSalary = (yourMonday, rate) => {
  const salary = yourMonday
    .map(job => job.duration * rate / 60)
    .reduce((total, money) => total += money);
  
  return `Your salary of Monday is €${salary}.`
};

console.log(calculateSalary(mondayTasks, rate));