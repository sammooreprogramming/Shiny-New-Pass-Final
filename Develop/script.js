// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//begin variable creation for later use
var special = [" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var number = ["0123456789"];
var blankVariable = [];


  // design the password via prompts and user data entry fom the user.
  var lowerChoice = confirm("Would you like your password to contain lowercase characters?");
  var upperChoice = confirm("Would you like your password to contain uppercase characters?");
  var numChoice = confirm("Would you like your password to include numbers as characters?");
  var specialChoice = confirm("Would you like your password to contain special characters?");
  var passCharNum = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

  // if statement to specify parameters to the user.
  if (passCharNum < 8 || passCharNum > 128) {
    alert("The password is not between the parameteres 8 and 128. Please try again.");
    var passCharNum = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

}

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
  blankVariable = blankVariable.concat(upper);
}

if (specialChoice){
  blankVariable = blankVariable.concat(upper);
}


// write password to the #password input
function writePassword() {
var password = generatePassword() ;
var passwordText = document.querySelector("#password");

passwordText.value = password;
}
