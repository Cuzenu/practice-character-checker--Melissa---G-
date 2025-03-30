// Lesson 1 practice, using readline-sync to prompt user for input of na index number to find the character at that inedx.
const readline = require('readline-sync');

// Prompt a user for a word or phrase.
let phrase = readline.question('Please enter a word or phrase: ');
let index = readline.questionInt('Please enter an index number to find the character at that index: ');

// Use bracket notation to access the character at the given index in the string and store it in a variable.
let characterAtIndex = phrase[index];

console.log("You entered: " + phrase + ", and the character at index " + index + " is: " + characterAtIndex);
// Output the character at the specified index to the console.