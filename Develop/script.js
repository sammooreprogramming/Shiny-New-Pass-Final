// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//begin variable creation for later use
var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var blankVariable = "";

// Write password to the #password input
function writePassword() {

  // design the password via prompts and user data entry fom the user.
  var lowerChoice = confirm("Would you like your password to contain lowercase characters?");
  var upperChoice = confirm("Would you like your password to contain uppercase characters?");
  var numChoice = confirm("Would you like your password to include numbers as characters?");
  var specialChoice = confirm("Would you like your password to contain special characters?");
  var passCharNum = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

  
  var password = generatePassword() ;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

