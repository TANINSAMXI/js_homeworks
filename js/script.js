'use strict';

const myYear = +prompt("Enter your year of birth");

const myCity = prompt("Which city do you live in?");

const favouriteSport = prompt("What is your favourite sport?");

const thisYear = 2024;

const myAge = myYear ? thisYear - myYear:null;


let cityAlert;
if (myCity) {
    if (myCity === "Rome") {
        cityAlert = "You live in the capital of Italy! \n";
    }
    else if (myCity === "London") {
        cityAlert = "You live in the capital of Great Britain! \n";
    }
    else if (myCity === "Paris") {
        cityAlert = "You live in the capital of France! \n";

        }
    else {
        cityAlert = `You live in ${myCity}! \n`;
    }
    }



let sportAlert;
if (favouriteSport) {
    if (favouriteSport === "football") {
        sportAlert = "Cool!You'll be a new Maradona :)";
    } else if (favouriteSport === "box") {
        sportAlert = "Cool!You'll be a new Oleksandr Usyk :)";
    } else if (favouriteSport === "motorcycling") {
        sportAlert = "Cool!You'll be a new Valentino Rossi VR46 :)";
    }
    else{
        sportAlert = "Keep training and become better!"
    }
}


let generalAlert = "";

if (myYear) {
    generalAlert = generalAlert + `You are ${myAge} old. \n`;
}
else {
    generalAlert = generalAlert + "Too bad you don't want to tell us your age :( \n";
}

if (myCity) {
    generalAlert = generalAlert + cityAlert;
}
else {
    generalAlert = generalAlert + "Too bad you don't want to tell us where you live :( \n";
}

if (favouriteSport) {
    generalAlert = generalAlert + sportAlert;
}
else {
    generalAlert = generalAlert +  "Too bad you don't want to tell about your favourite sport :(";
}

alert(generalAlert);

