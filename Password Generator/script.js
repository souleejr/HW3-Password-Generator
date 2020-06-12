//Password Generator will provide a password w/ 8-25 characters//

// Assignment Code + an Event Listener to prompt questions when button is pushed//
document.querySelector("#generate").addEventListener("click", writePassword);

//ARRAYS//
var number = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!","#", "%", "&", "*", "?", ",", ".", "/", "~", "+", "-" ];
var alphaLower =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// VARIABLES //
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

//Prompt to confirm how many characters user would like to use//
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in your Password, **Remember** 8-25 characters!"));
}

//Loop added if answer does not meet Parameter Requirements//
while(confirmLength <= 7 || confirmLength >= 26) {
  alert("Whoa! Your Password Must Be Between 8-25 Characters! Please Try again :) ");
  var confirmLength = (prompt("How many characters would you like in your Password"));

}

//Prompt will repeat back the users character input//
alert('Your Password will have $[confirmLength] Characters'); 

//Verify Password Parameters//
var confirmSpecialCharacter = confirm("Click OK if special charcters are needed");
var confirmNumericCharacter = confirm ("Click OK if numeric characters are needed");
var confirmLowerCase = confirm ("Click OK if lowercase characters are needed");
var confirmUpperCase = confirm ("Click OK to uppercase characters are needed");
 
  //Loop added if answer is outside of criteria//
    if (confirmUpperCase === false && confirmLowerCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false);
      alert("You must choose 1") 
        var confirmSpecialCharacter = confirm("Click OK if special charcters are needed");
        var confirmNumericCharacter = confirm("Click OK if numeric charcters are needed");
        var confirmLowerCase = confirm("Click OK if lowercase charcters are needed");
        var confirmUpperCase = confirm("Click OK if uppercase charcters are needed");
  

//Action assigned to the password parameters "FIX THIS"//
  var passwordCharacters = [];

if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar);

}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number);

}

if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower);

}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper);

}

console.log(passwordCharacters);

//"empty string" to be looped for selecting random characters from the Array//
  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
  
  }
  //Removed all Undifined values//

  var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3 ];

  var filtered = arr.filter(function(x) {
     return x !== undefined;
  });
  
  console.log(filtered);
  
  /*
    Output: [ 0, 1, '', false, 2, null, 3]
  */
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

