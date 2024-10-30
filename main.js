/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function user() {
    let age = prompt("Please enter your age");

    if (age >= 60) {
        return console.log(" You qualify for a Senior discount")
    }
    if (age <= 16){
        return console.log("You are not old enough to drive yet")
    }
    if (age == 44){
        return console.log("So is Mr. Squirrel!")
    }
    let age1 = 60 - age
    return `you are ${age1} years away from the Senior discount`
}

function user_name() {
    if (user_name == Mr. Squrriel) {
        console.log ("🐿️")
    return console.log
}

}

