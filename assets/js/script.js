// Assignment code here
var passLength = function() {
  var length = window.prompt("Please provide the length of the password. Minimum 8 characters and maximum 128.")
  return length;
}

var passwordDetails = {
  length: passLength(),
}

console.log(passwordDetails.length);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
