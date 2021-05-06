//-----LIST OF SPECIAL CHARACTERS
var specialChar = "!@#$%^&*()_+~`|}{[]\\:;?'\"><,./-="

//-----OBJECT FOR PASSWORD DETAIL COLLECTION-----//
var passwordReq = {
  length: 0,
  lcase: true,
  ucase: true,
  num: true,
  sChar: true,
  //---Method / function to collect password details
  otherDetails: function() {
    debugger
    this.lcase = window.confirm("Do you want to include lower case letters?");
    this.ucase = window.confirm("Do you want to include upper case letters?");
    this.num = window.confirm("Do you want to include numbers?");
    this.sChar = window.confirm("Do you want to include special characters?");
    console.log(passwordReq);
    //---OR condition is only false if all items are false, so this if statement will only run if all four cases are false
    if (!(this.lcase || this.ucase || this.num || this.sChar)) {
      window.alert("At least one option from lowercase, uppercase, numbers or special characters needs to be selected. Please try again.");
      this.otherDetails();
    }
  }
};
//-----OBJECT FOR PASSWORD DETAIL COLLECTION ENDS-----//

//-----FUNCTION TO DETERMINE PASSWORD LENGTH-----//
var passLength = function() {
  var len = parseInt(window.prompt("Please provide the length of the password. Minimum 8 characters and maximum 128."));
  //---Check if number is between 8 and 128
  if (len > 128 || len < 8) {
    window.alert("Invalid input!! Please enter a number between 8 and 128 to meet the password requirement");
    passLength();
  }
  //---Check if its anything besides number
  //---REFERENCE NOTE: I noticed whenever I enetered anything non numeric console.log was returning NaN, did some research and found out its Not-A-Number.
  //---Found about it in MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
  else if (Number.isNaN(len)) {
    window.alert("Invalid input!! Please enter a numeric value.");
    passLength();
  }
  //---Assigns value to the length in passwordReq
  else {
    passwordReq.length = len;
  }
}
//-----FUNCTION TO DETERMINE PASSWORD LENGTH ENDS-----//

//-----FUNCTION FOR RANDOM NUMBER GENERATOR-----//
var randomNumberGen = function(min, max) {
  var value = Math.floor(Math.random()*(max - min +1) + min);
  return value;
}

//-----FUNCTION FOR RANDOM CHARACTER GENERATOR-----//
var randomCharGen = function(input) {
  var randomChar = "";
  switch(input) {
    //---Lowercase letters
    case 0:
      //---REFERENCE NOTE: String.fromCharCode https://stackoverflow.com/questions/40586761/how-to-generate-a-random-letter-when-clicking-a-button-in-js + MDN
      randomChar += String.fromCharCode(randomNumberGen(97, 122));
      break;
    case 1:
      randomChar += String.fromCharCode(randomNumberGen(65, 90));
      break;
    case 2:
      randomChar += String.fromCharCode(randomNumberGen(48, 57));
      break;
    case 3:
      //---REFERENCE NOTE: Special characters were at different locations so used string array instead.
      randomChar += specialChar[randomNumberGen(0, specialChar.length - 1)];
      break;
  }
  return randomChar;
}
//-----FUNCTION FOR RANDOM CHARACTER GENERATOR ENDS-----//

//-----FUNCTION TO GENERATE PASSWORD BASED ON THE REQUIREMENTS-----//
var generatePassword = function() {
  //---Password requirements collection
  passLength();
  passwordReq.otherDetails();

  //---Array for password character requirements (True or False)
  var reqArray = [passwordReq.lcase, passwordReq.ucase, passwordReq.num, passwordReq.sChar];
  //---Empty array: to be filled with switch case# based on password requirements
  var ranCharCallArray = [];
  //---Empty string: to be filled with the final password generated based on requirements
  var finalPassword = "";
  //---Fills ranCharCallArray with case# based on true or false picked up from requirements
  for (var i=0; i<reqArray.length; i++) {
    if (reqArray[i]) {
      ranCharCallArray.push(i);
    }
  }
  //---Picks a random case# from ranCharCallArray, which in turn returns a random character, which is then appended until password length is reached
  for (var i=0; i<passwordReq.length; i++) {
    finalPassword += randomCharGen(ranCharCallArray[randomNumberGen(0, ranCharCallArray.length - 1)]);
  }
  return finalPassword;
}
//-----FUNCTION TO GENERATE PASSWORD BASED ON THE REQUIREMENTS ENDS -----//

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
