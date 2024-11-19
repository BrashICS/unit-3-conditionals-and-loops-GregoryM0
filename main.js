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
document.getElementById("startgame1").addEventListener("click", start_game);
document.getElementById("menu1").addEventListener("click", menu);
document.getElementById("Sword").addEventListener("mouseover", image_pop);
document.getElementById("Sword").addEventListener("mouseleave", image_out);



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

    let room1 = prompt("Will you go to the basement with the ghouls, or the living room full of insects and beasts? Or will you climb up the tree and go through the window into a bedroom 1 or 2 or 3")

    if (room1 == 1) {
       basement()
    }
    if (room1 == 2) {
        living_room()
    }
    if (room1 == 3) { 
        window_bedroom()
    }
    if (room1 == 4) { 
        third_choice()
    }

 

function basement() {
        let decision1 = prompt("you have walked into the cold ghostly basement. As you enter the room it begins to reek of blood and flesh, you fall down the stairs and land right by the head ghoul. what do you do?  Try to run away(1) or Freeze in terror(2) or fight(3) ")

        if (decision1 == 1) {
            alert ("You have died whilst attempting to flee up the stairs, you were grabbed by the leg and pulled down where you died seconds later. Though with less pain as you had died from  strike to the head from the fall.")
        }
        if (decision1 == 2) {
            alert ("You are eaten alive in a far more grusome way than if you had chosen to run.")
        }
        if (decision1 == 3) {
           let live = prompt("You have chosen to fight, you go through a grusome battle for 30 minutes before the cuts and bruises begin to wat you down, as you keep fighting it becomes harder and harder to go on. There are only a few left, what do you do? 1 - fight 2 - call for help ")
           if (live == 1)
            battle()
           if (live == 2)
            call_for_help()
        }
    }

    function window_bedroom() {
        let dec1 = prompt("You have chosen to go through the window, you walk out of the bedroom and see a group of monsters hovering around the stairwell, what do you do, go to fight them while their back is turned (1) or walk around the house another way(2)")

        if (dec1 == 1) {
            alert("You kill three before you are found out and run to hide in a closet, but their were smallre insects an bats in their, and you are never seen agan.")
        }
        if (dec1 == 2) {
            alert("You walk around the house and find your way to a the treasure room you came here for, it is filled with candy, everything you ever wanted is in that room. but there is one guard left. You take him down without anyone hearing and the candy is all your now.")
           let escape = prompt("You have to get away now, how will you leave, will you jump out of the window of the treasure room(1) or will you risk it and go back the route you came(2) keep in mind they do checks every 10 minutes and you only have 3 left.")
           if (escape == 1) {
            alert("You have gotten down safely but there are guards waiting around the corner, and you are caught.")
           }
           if (escape == 2) {
            let hide = prompt("You are one room down when he three minutes passes, you see the guard coming, where will you hide? in the closet(1) or behind the door(2)")
            if (hide == 1) {
                alert("You are found and are captured by the monsters.")
            }
            if (hide == 2) {
                alert("Congratulations!!!! You escaped with the candy after the guard passes the room. ")
            }
        }
        }
    }
        
    }
    function battle() {
        alert("You have chosen to fight the remaining ghouls, in your valient effort you overcome your limits and just before you past out from exhaustion and blood loss you slay the last one, though you have survived the fight, you die soon after due to the overflowing blood loss.")
    }

    function call_for_help() {
        alert("You hae chosen to call for help, and you have gotten very lucky, some passerbies have heard your ry for help and have come to help, though they have brought some friends with them. You all get ready to fight, but one of your people begin to go crazy and shiver in fear, they are eaten alive right in front of your and everyone else. Horrified my this you all begin to freeze, and in that slpit second the beasts took anvantage and landed hits and bites on all of you, though you survive you and all gravely injured. You keep fighting and eventually win the battle whilst barely surviving. After the fight everyone is stunned but the adrenaline hasnt warn off yet and you can make it out of the basement, where you call for help and end up passing out. As you awaken in the hospital you are presented with all the candy you could ever need and your family there to celebrate that you lived and are ok.")
    }


function living_room() {
        let stair = prompt("You see someone walk up the stairs, will you follow or will you run away? Yes(1) No(2)")

        if (stair == 1) {
            alert ("As soon as you turn the corner you are grabbed and fight a grusome battle with animals and horror movie villains alike. Though you take out some with you.")
        }
        if (stair == 2) {
            alert ("You live this time.")
            let new_prompt = prompt =("Will you now leave the house or go to the kitchen? 1 or 2")
        }
            if (new_prompt == 1) {
                alert ("You live and are given a huge bowl of candy.")
        }
        if (new_prompt == 2)
            alert ("You are stabbed in the back as you enter the kitchen, and you bleed out on the floor.")
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
            alert("You have survived, well done.")
        }
    }








// Setup the menu
// Prompt with the menu

function menu(){
    let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`
    let selection = Number(prompt(message))
    if (selection == 1) {
        alert("Lets Play!")
        let diff = prompt(`What difficulty level will you play on?:
            1 - Easy
            2 - Medium
            3 - Hard`)

            if (diff == 1) {
               alert("You selected the easy route.")
           }
           else if (diff == 2) {
               alert("Most people pick the medium route.")
           }
           else if (diff == 3) {
               alert("I see you like a challenge.")
           }
           else {
               alert("Invalid selection/input. Try again.")
           } 
    }
    else if (selection == 2) {
        alert("You selected options.")
    }
    else if (selection == 3) {
        alert("There is no new DLC at this time.")
    }
    else if (selection == 4) {
        alert("Everything is up to date.")
    }
    else if (selection == 5) {
        alert("Bye.")
    }
    else {
        alert("Invalid selection/input. Try again.")
    }
}

 


//else practice//
function is_number(num) {
    if (typeof num == "number") {
        console.log("true")
    }
    else {
        console.log("false")
    }
}

function which_day(n){
    if (n == 1) {
        return("Sunday")
    } if (n == 2) {
        return("Monday")
    } if (n == 3) {
        return("Tuesday")
    } if (n == 4) {
        return("Wednsday")
    } if (n == 5) {
        return("Thursday")
    } if (n == 6) { 
        return("Friday")
    } if (n == 7) {
        return("Saturday")
    } else {
        return("Invalid number/input")
    }
}


function image_pop(){
    document.getElementById("textsword") .textContent = "What is going on with Landons computer right now?"
}
function image_out(){
    document.getElementById("textsword") .textContent = ""
}




function countdown(start, stop) {
    if (start <= stop) {
        return `stop is a higher number than stop?`
    }
    
    let x = start
    let y = stop
    let count = 1
    while (x != y) {
        x = x - 1
        count += 1;
        console.log(`${x}`)
    }
    console.log (count)

}

function average(n) {
    let avg = 0;
    let count = 0;

    while (count <= n) {
    avg = avg + Number(+prompt(`Please enter value ${count}/${n}`));
    count++;
    }
    avg = round (avg / n, 1);
    console.log(`The average is ${avg}`);
}

function random_until(min, max, stop) {
    if (stop > max || stop < min || max <= min) {
        return -1;
    }

    let rnd =randInt(min, max);

    while (rnd != stop) {
        console.log(rnd)
        rnd =randInt(min, max);
    }
    return stop;
}

function print_reverse(print) {
    //start with a blank strng to build up
    let output = "";

    //Loop through the given string from the END and build the output
    let i = str.length - 1
    while (i >= 0) {
        output += str[i];
        i--;
    }
    console.log(output)
}

function dragonandgoblin(str) {
    let i = 0;
    let countd = 0;
    let countg = 0;
    while (i < str.length) {
        if (str[i] == "d") {
            countd++;
            i++;
        }
    if(i < str.length) {
        if (str[i] == "g")
            countg++;
            i++;
            }
}
console.log(`${countd}, ${countg}`)
}


function negative_only(){
    let number;
    let output;
    do {
        number = prompt("Enter a negative number.");
        output = number;
      
      } while (number > -1|| isNaN(number)) ;
      console.log (`${output}`)
}






function factorial(n) {
let current_digit= 1;
let product = 1;
for (let current_digit = 1; current_digit <= n; current_digit++) {
    product = product * current_digit;
}
console.log(`${product}`)
}

function count_up(start,stop){
    for(let count = start; count <= stop; count++){
        console.log(`${count}`)
    } 

}
function count_down(start,stop){
    for(let count = start; count >= stop; count--){
        console.log(`${count}`)
    } 

}

function sum(n){
    let product = 0;
    for(let x = 1; x <= n; x++)
        product += x 
        console.log(`${product}`)
}

function count4(begin, end){
    let sum =0;
    let count = 0;
for(let i = begin; i <=end; i++)
    if (i % 4 == 0){
            count += 1  
    }
    console.log(`${count}`)
}

function sum_divisable(n, x){
    let sum = 0;

    for(let i = 0; i <= n; i++ ){
        if(i % x == 0){
            sum += i;
        }            
        }
        console.log(sum)
}