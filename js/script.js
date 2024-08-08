'use strict';

const firstNumb = +prompt("Please enter first number:");
const secondNumb = +prompt("Please enter second number:");
const thirdNumb = +prompt("Please enter third number:");

if (isNaN(firstNumb) || isNaN(secondNumb) || isNaN(thirdNumb)) {

    alert("Warning ! Enter numbers only !");

}

else {

    const result = (firstNumb + secondNumb + thirdNumb) / 3;

    alert('Your result : ' + result);
}