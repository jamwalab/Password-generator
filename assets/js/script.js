// Assignment code here

//-----OBJECT FOR PASSWORD DETAILS
var passwordDetails = {
  length: 0,
  lcase: true,
  ucase: true,
  num: true,
  sChar: true,

  /*passLength: function() {
    var len = parseInt(window.prompt("Please provide the length of the password. Minimum 8 characters and maximum 128."));
    console.log("Before if statements", len);
    if (len > 128 || len < 8 ) {
      window.alert("Invalid input!! Minimum password length is 8 and maximum 128.");
      this.passLength();
    }
    else if (Number.isNaN(len)) {
      window.alert("Invalid input!! Please enter a numeric value.");
      this.passLength();
    }
    else {
      debugger;
      this.length = len;
    }
  },*/

  //---Method / function to collect password details
  otherDetails: function() {
    this.lcase = window.confirm("Do you want to include lower case letters?");
    this.ucase = window.confirm("Do you want to include upper case letters?");
    this.num = window.confirm("Do you want to include numbers?");
    this.sChar = window.confirm("Do you want to include special characters?");
    if (!(this.lcase || this.ucas || this.num || this.sChar)) {
      window.alert("Please select at least one option from lowercase, uppercase, numbers or special characters. Please try again.");
      this.otherDetails();
    }
  }
};

//-----FUNCTION TO DETERMINE PASSWORD LENGTH
var passLength = function() {
  var len = parseInt(window.prompt("Please provide the length of the password. Minimum 8 characters and maximum 128."));
  //---Check if number is between 8 and 128
  if (len > 128 || len < 8 ) {
    window.alert("Invalid input!! Minimum password length is 8 and maximum 128.");
    passLength();
  }
  //---Check if its anything besides number
  //---REFERENCE NOTE: I noticed whenever I enetered anything non numeric console.log was returning NaN, did some research and found out its Not-A-Number.
  //---Found about it in MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
  else if (Number.isNaN(len)) {
    window.alert("Invalid input!! Please enter a numeric value.");
    passLength();
  }
  //---Assigns value to the length in passwordDetails
  else {
    passwordDetails.length = len;
  }
}

passLength();
passwordDetails.otherDetails();

console.log(passwordDetails);
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
