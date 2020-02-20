'use strict';

const quotes = [
    {
      quote:'Don not hate, it is too big a burden to bear.',
      author:'Martin Luther'
    },
    {
      quote:'Children are the worlds most valuable resource and its best hope for the future',
      author: 'John F. Kennedy'
    },
    {
      quote:'A room without books is like a body without a soul.',
      author:'Marcus Tullius Cicero'
    },
    {
      quote:'My words fly up, my thoughts remain below; Words without thoughts never to heaven go.',
      author: 'William Shakespeare'
    },
    {
      quote:'To give anything less than your best, is to sacrifice the gift.',
      author: 'Steve Prefontaine'
    },
    {
      quote:'The best way to find yourself is to lose yourself in the service of others.',
      author:'Mahatma Gandhi'
    },
    {
      quote:'It always seems impossible until it’s done.',
      author: 'Nelson Mandela'
    },
    {
      quote:'Not how long, but how well you have lived is the main thing.',
      author:'Seneca'
    },
    {
      quote:'I love those who can smile in trouble.',
      author: 'Leonardo da Vinci'
    }
]

const quoteHold = document.querySelector('#quote');
const authorHold = document.querySelector('#author');
const button = document.querySelector('button');


button.addEventListener('click', randomQuote);

function randomQuote() {
  const random = Math.floor(Math.random() * quotes.length)
  quoteHold.innerText = quotes[random].quote;
  authorHold.innerText = quotes[random].author;
}