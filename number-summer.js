
num = 0;
let mode1 = true;
const prompt = require ('prompt-sync') ({signit: true })
while (mode1)  //controls whether curly brackets will run. If true code will run, if false code wont run.
{
let input = prompt ("Place number here");
if (input === "done"){ //comparing the variable input and the string done
    mode1 = false //set boolean to false
} else {
    num = num+Number(input)
}
}
// if somebody types done it will be changed to false.
console.log (num);




// In a file called number-summer.js file, write a program that
// continually prompts the user for numbers until the user enters the
// keyword "done" at which point the sum of all the inputted
// numbers is logged out


//npm install prompt-sync is used to install node module inside terminal and vs code

//make sure you can enter and then exit while loop

//when you add a string to number the whole thing becomes a string

// Initializer or starter or starting point
// Condition for when your loop should end
// Incrementor or decrementor !! continues up or down. Add or subtract



//greysons solution
//console.log = require('prompt-sync')({sigint: true});
//console.log("Enter some numbers (type 'done' when completed);")
//let input = prompt(">");
//let total = 0;

//while(input !== "done"){
    //total = total + Number(input);
    //input = prompt (" >");
//}

//console.log ("Your total is: " + total);
