const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let firstStr = str.slice(0, 3);
let secondStr = str.slice(3);
let moddedStr = secondStr.concat(firstStr);
console.log(moddedStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} is changed to ${moddedStr}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userNum = input.question('how many letters should be moved? ')
let firstHalf = str.slice(0, userNum);
let secondHalf = str.slice(userNum);
let combinedStr = secondHalf.concat(firstHalf);
console.log(combinedStr);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let userNum2 = input.question('how many letters should be moved? ')
if (userNum2 >= str.length) {
    firstHalf = str.slice(0, 3);
    secondHalf = str.slice(3);
    combinedStr = secondHalf.concat(firstHalf);
    console.log(combinedStr);
    console.log(`Your number, ${userNum2}, is too large.`)
} else {
    firstHalf = str.slice(0, userNum2);
    secondHalf = str.slice(userNum2);
    combinedStr = secondHalf.concat(firstHalf);
    console.log(combinedStr);

}