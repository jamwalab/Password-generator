//-----LIST OF SPECIAL CHARACTERS
var specialChar = "!@#$%^&*()_+~`|}{[]\\:;?'\"><,./-="

//-----OBJECT FOR PASSWORD DETAILS
var passwordReq = {
  length: 0,
  lcase: true,
  ucase: true,
  num: true,
  sChar: true,

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

//-----RANDOM NUMBER GENERATOR
var randomNumberGen = function(min, max) {
  var value = Math.floor(Math.random()*(max - min +1) + min);
  return value;
}

//-----RANDOM CHARACTER GENERATOR
var randomCharacter = {
  ranLCase: String.fromCharCode(randomNumber(97, 122)),
  ranUCase: String.fromCharCode(randomNumber(65, 90)),
  ranNum: String.fromCharCode(randomNumber(48, 57)),
  ranSChar: specialChar[randomNumber(0, specialChar.length - 1)]
}

var passGen = function() {

}










//for (var i = 0; i < 100; i++) {
  console.log(specialChar[randomNumber(0, specialChar.length - 1)]);
//}
console.log(String.fromCharCode(randomNumber(97, 122)));
console.log(passwordDetails);
// Get references to the #generate element

var check = [String.fromCharCode(randomNumber(97, 122)),String.fromCharCode(randomNumber(10, 22))];
console.log(check);
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
