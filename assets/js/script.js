// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays of lower letter, upper letter, numbers, and symbols 
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Declaring Variables 
var lengthOfPassword = "";
var confirmLowerLetter;
var confirmUpperLetter;
var confirmSymbol;
var confirmNumber;



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;


}
// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var lengthOfPassword = prompt("How many characters would you like your password to contain?");
  // Loop if answer is outside the range 
  while((lengthOfPassword <=7)  || (lengthOfPassword >= 129 )|| isNaN(lengthOfPassword)) {
      alert("Password length must be between 8-128 characters, reenter!");
      var lengthOfPassword = (prompt("How many characters would you like your password to contain?"));
      } 
      alert(`Your password will have ${lengthOfPassword} characters`);

    // Sets the characters of the password 
    var confirmSymbol = confirm(" By clicking 'Ok' you're confirming to include Symbol in the password");
    var confirmNumeric = confirm("By clicking 'Ok' you're confirming to include Number in the passwords");    
    var confirmLowerLetter = confirm("By clicking 'Ok' you're confirming to include LowerCase  in the password");
    var confirmUpperLetter = confirm("By clicking 'Ok' you're confirming to include UpperCase in the password");
      // If the entered value is outside of the parameters the loop starts again
      if(confirmUpperLetter === false && confirmLowerLetter === false && confirmSymbol === false && confirmNumeric === false) {
        alert("You must choose at least one parameter");
        var confirmSymbol = confirm(" By clicking 'Ok' you're confirming to include Symbol in the password");
        var confirmNumeric = confirm("By clicking 'Ok' you're confirming to include Number in the passwords");    
        var confirmLowerLetter = confirm("By clicking 'Ok' you're confirming to include LowerCase  in the password");
        var confirmUpperLetter = confirm("By clicking 'Ok' you're confirming to include UpperCase in the password");


    }