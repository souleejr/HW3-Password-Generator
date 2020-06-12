//Password Generator will provide a password w/ 8-50 characters//

// Assignment Code + an Event Listener to prompt questions when button is pushed//
document.querySelector("#generate").addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");

//MISC ARRAYS//
var number = ["0-9"];
var specialChar = ["!","#", "%", "&", "*", "?", ",", ".", "/", "~", "+", "-" ];
var alphaLower =["a-z"];
var alphaUpper = ["A-Z"];

// VARIABLES //
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

//Prompt to confirm how many characters user would like to use//
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in your Password"))
}

//Loop added if answer does not meet criteria//
while(confirmLength <= 8 || confirmLength >= 50){
  alert("Password Length Must Be Between 8-50 Characters!")
  var confirmLength = (prompt("How many characters would you like in your Password"))
}

//Prompt will repeat back the users character input//
alert('Your Password will have ${confirmLength} characters') 

//Verify Password Criteria//
var confirmSpecialCharacter


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
