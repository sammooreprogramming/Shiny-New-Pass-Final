// Assignment code here
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

//begin variable creation for later use
var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
let holder = "";

// Add event listener to generate button along new function
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let holder2 = "";
// design the password via prompts and user data entry fom the user.
var passCharNum = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
var lowerChoice = confirm("Would you like your password to contain lowercase characters?");
var upperChoice = confirm("Would you like your password to contain uppercase characters?");
var numChoice = confirm("Would you like your password to include numbers as characters?");
var specialChoice = confirm("Would you like your password to contain special characters?");

// if statement to specify parameters to the user.
  if (passCharNum < 8 || passCharNum > 128) {
    alert("The password is not between the parameteres 8 and 128. Please try again.");
    var passCharNum = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
}
  
// used to remind the user the parameters of the application
else if (lowerChoice === false && upperChoice === false && numChoice && specialChoice === false){
  alert("You must select at least 1 option to generate a password. Please try again.");
  var lowerChoice = confirm("Would you like your password to contain lowercase characters?");
  var upperChoice = confirm("Would you like your password to contain uppercase characters?");
  var numChoice = confirm("Would you like your password to include numbers as characters?");
  var specialChoice = confirm("Would you like your password to contain special characters?");
};

// if statements to specify parameters of the new password.
if (upperChoice){
  holder = holder.concat(upper);
}
if (lowerChoice){
  holder = holder.concat(lower);
}
if (numChoice){
  holder = holder.concat(number);
}
if (specialChoice){
  holder = holder.concat(special);
}

//use both the math and random tools to generate a random password string from the data input
for (var i = 0; i < passCharNum; i++) {
 holder2 += holder.charAt(Math.floor(Math.random() * holder.length))
}
return holder2;
}
// write password to the #password input
function writePassword(){
  let password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}