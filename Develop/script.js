// This is a random number generator

// //this is an accumulator variable
var myPassword = "";
 var loops = Math.floor(Math.random() * 128);
// console.log("Number of loops is " + loops);

/*  For Loop to generate multiple random numbers together
for (var i=0; i<loops; i++) {
 var randomNumber = Math.floor(Math.random() * 10);
 console.log(randomNumber)
 myPassword += randomNumber;
//   //  myPassword = myPassword + randomNumber;
// }
console.log(myPassword); */


// This is a random letter generator
/* var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var indexCurrentLetter = Math.floor(Math.random() * letters.length);
//console.log(currentLetter);
//console.log(letters[indexCurrentLetter]);
var letterString = "";
for (var i=0; i<loops; i++) {
  var indexCurrentLetter = Math.floor(Math.random() * letters.length);
  var currentLetter = letters[indexCurrentLetter];
  letterString += currentLetter;
}
console.log(letterString);

*/

// Prompt function
var userInput = prompt("Type your Name");
console.log(userInput);



//var potentialCharacters = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&";

// ask user if they want uppercase letters
var userInput1 = prompt("Do you want to include uppercase letters? Reply Yes or No");
console.log(userInput);
  if(userInput1 === "No") {
    var letters1 = "123456789abcdefghijklmnopqrstuvwxyz!@#$&"
    var indexCurrentLetter = Math.floor(Math.random() * letters1.length);
      //console.log(currentLetter);
      //console.log(letters[indexCurrentLetter]);
    var letterString = "";
    for (var i=0; i<loops; i++) {
    var indexCurrentLetter = Math.floor(Math.random() * letters1.length);
    var currentLetter = letters1[indexCurrentLetter];
    letterString += currentLetter;
        }
console.log(letterString);
console.log(letterString);
  } else {
    var userInput2 = prompt("Do you want to include lowercase letters? Reply Yes or No");
    if(userInput2 === "No") {
          var letters2 = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&"
          var indexCurrentLetter = Math.floor(Math.random() * letters2.length);
            //console.log(currentLetter);
            //console.log(letters[indexCurrentLetter]);
          var letterString = "";
          for (var i=0; i<loops; i++) {
          var indexCurrentLetter = Math.floor(Math.random() * letters2.length);
          var currentLetter = letters2[indexCurrentLetter];
          letterString += currentLetter;
              }
      console.log(letterString);
      console.log(letterString);
  } else {
    var userInput3 = prompt("Do you want to include special characters letters? Reply Yes or No");
    if(userInput3 === "No") {
          var letters3 = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          var indexCurrentLetter = Math.floor(Math.random() * letters3.length);
            //console.log(currentLetter);
            //console.log(letters[indexCurrentLetter]);
          var letterString = "";
          for (var i=0; i<loops; i++) {
          var indexCurrentLetter = Math.floor(Math.random() * letters3.length);
          var currentLetter = letters3[indexCurrentLetter];
          letterString += currentLetter;
              }
      console.log(letterString);
      console.log(letterString);
  } else {
    var userInput4 = prompt("Do you want to include numbers? Reply Yes or No");
    if(userInput4 === "Yes") {
      var letters4 = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var indexCurrentLetter = Math.floor(Math.random() * letters4.length);
        //console.log(currentLetter);
        //console.log(letters[indexCurrentLetter]);
      var letterString = "";
      for (var i=0; i<loops; i++) {
      var indexCurrentLetter = Math.floor(Math.random() * letters4.length);
      var currentLetter = letters4[indexCurrentLetter];
      letterString += currentLetter;
          }
  console.log(letterString);
  console.log(letterString);
  } else {
    window.alert("Error, please begin again.");
  }}}}


// example: if user wants upper case lettes and special characters, 'potential characters' will look like...
// var potentialCharacters = 'ABCDEFGHIJKLMNNOPQRSTUVWXYZ!@#$%^&*()?><'

// use for loops just like we did above to select x number of chararcters from 'potentialCharcters'
/*
var letters = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&"
var indexCurrentLetter = Math.floor(Math.random() * letters.length);
//console.log(currentLetter);
//console.log(letters[indexCurrentLetter]);
var letterString = "";
for (var i=0; i<loops; i++) {
  var indexCurrentLetter = Math.floor(Math.random() * letters.length);
  var currentLetter = letters[indexCurrentLetter];
  letterString += currentLetter;
}
console.log(letterString);
console.log(letterString);
*/
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;

}
function generatePassword() {
  //var randomNumber = Math.floor(Math.random() * 10);
  window.alert(letterString);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
