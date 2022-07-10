// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//begin variable creation for later use
var special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var holderArray = [];
var holderArray2 = [];

  // design the password via prompts and user data entry fom the user.
  var lowerChoice = confirm("Would you like your password to contain lowercase characters?");
  var upperChoice = confirm("Would you like your password to contain uppercase characters?");
  var numChoice = confirm("Would you like your password to include numbers as characters?");
  var specialChoice = confirm("Would you like your password to contain special characters?");
  var passCharNum = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

  function writePassword() {

  // if statement to specify parameters to the user.
  if (passCharNum < 8 || passCharNum > 128) {
    alert("The password is not between the parameteres 8 and 128. Please try again.");
    var passCharNum = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
}
  

// used to remind the user the parameters of the application
else if (lowerChoice === false && upperChoice === false && numChoice && specialChoice === false){
  alert("You must select at least 1 option to generate a password.");
  var lowerChoice = confirm("Would you like your password to contain lowercase characters?");
  var upperChoice = confirm("Would you like your password to contain uppercase characters?");
  var numChoice = confirm("Would you like your password to include numbers as characters?");
  var specialChoice = confirm("Would you like your password to contain special characters?");
};

// if statements to specify parameters of the new password.
if (upperChoice){
  blankVariable = blankVariable.concat(upper);
}
if (lowerChoice){
  blankVariable = blankVariable.concat(lower);
}
if (numChoice){
  blankVariable = blankVariable.concat(number);
}
if (specialChoice){
  blankVariable = blankVariable.concat(special);
}

//use math and random tools to generate a random password string from the data input


// write password to the #password input
  var password = generatePassword() ;
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);