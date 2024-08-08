'use strict';

const hours = +prompt("Please enter the number of hours:");

if (isNaN(hours) || hours < 0 ) {

    alert("Please enter the correct number of hours!");
}

else {

    const sec = hours * 3600;

    alert( sec + ' seconds' );
}