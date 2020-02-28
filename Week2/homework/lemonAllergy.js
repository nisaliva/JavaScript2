'use strict'

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const restOfBasket = fruitBasket.filter(fruit => !fruit.includes('Lemon'));

console.log ('My mom bought me a fruit basket, containing '+ restOfBasket);
