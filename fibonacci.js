const prompt = require ('prompt-sync') ({signit: true })

let n = Number(prompt("Enter a vaule for 'n': "));
let count = 0;

let prevNum = 0;
let currentNum = 1;
let total = 0; //prevNum + currentNum;

console.log(prevNum); //accounts for the first 0 in the sequence
let count = 1; //start at 1 to account for the first 0 in the sequence

while (count < n) //loop runs n times

{
   total = prevNum + currentNum;
   prevNum = currentNum;
   currentNum = total;
   
   count++;
}



//Greysons answer
//const prompt = require('prompt-sync')({sigint: true});

//let n = Number(prompt("Enter a value for 'n' (greater than 0): "));

// 1st iteration
// 0 1 1 
// p c t 

// 2nd iteration
// 0 1 1 2
//   p c t

// 3rd iteration
// 0 1 1 2 3
//     p c t

//let prevNum = 0; //previous number in sequence
//let currentNum = 1; //current number in sequence (our starting point for all intents/purposes)
//let total = 0; //prevNum + currentNum;

//console.log(prevNum); //accounts for the first 0 in the sequence
//let count = 1; //start at 1 to account for the first 0 in the sequence

//while (count < n){ //loop runs n times

 //   console.log(currentNum)
   
//    total = prevNum + currentNum; //set new total
 //   prevNum = currentNum; //set previous number = to current number
//    currentNum = total; //current num is new total
    
  //  count++; //go to next number in sequence
//}