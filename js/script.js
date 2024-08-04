'use strict';

//#1

const name  = prompt('What is your name?');
const age = prompt('How old are you?');
const likesProgramming = confirm('Do you like coding?');

//#2

console.log(name,age,likesProgramming);
console.log(typeof name, typeof age, typeof likesProgramming);

//#3

const greeting = `Hi , ${name} !`;
alert(greeting);

//#4

const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log(nextAge);

//#5

const isAdult = age >= 18;
console.log(isAdult);






