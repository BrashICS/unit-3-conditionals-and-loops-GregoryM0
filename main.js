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




//Halloween game//
function start_game() {
    let name = prompt("What is your name??")
    alert(`Welcome, ${name}, to Haunted St. Matthew HS!`)

    let room1 = prompt("Will you go to the basement with the ghouls, or the living room full of insects and beasts? 1 or 2")

    if (room1 == 1) {
       basement()
    }
    if (room1 == 2) {
        living_room()
    }
    if (room1 == 3) { 
        third_choice()
    }

 

function basement() {
        let decision1 = prompt("you have walked into the cold ghostly basement. As you enter the room it begins to reek of blood and flesh, you fall down the stairs and land right by the head ghoul. what do you do?  Try to run away(1) or Freeze in terror(2) ")

        if (decision1 == 1) {
            alert ("You have died whilst attempting to flee up the stairs, you were grabbed by the leg and pulled down where you died seconds later. Though with less pain as you had died from  strike to the head from the fall.")
        }
        if (decision1 ==2)
            alert ("You are eaten alive in a far more grusome way than if you had chosen to run.")
    }



function living_room() {
        let stair = prompt("You see someone walk up the stairs, will you follow or will you run away? Yes(1) No(2)")

        if (stair == 1) {
            alert ("As soon as you turn the corner you are grabbed and fight a grusome battle with animals and horror movie villains alike. Though you take out some with you.")
        }
        if (stair == 2) {
            alert ("You live this time.")
            let new_prompt = prompt =("Will you now leave the house or go to the kitchen? 1 or 2")
            return new_prompt
        }
            if (new_prompt == 1) {
                alert ("You live and are given a huge bowl of candy.")
        }
        if (new_prompt == 2)
            alert ("You are stabbed in the back as you enter the kitchen, and you bleed out on the floor.")
    }

    }


    
    function third_choice() {
        let choice = prompt("Are you sure? 1(Basement) 2(Living Room) 3(Run) ")

        if (choice == 1) {
            basement()
        }

        if (choice == 2) {
            living_room()
        }
        if (choice == 3) { 
            alert("You have serviced, well done.")
        }
    }


