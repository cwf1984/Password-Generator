// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array list of numbers

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array list of lowercase letters

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array list of uppercase letters

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Array list of special characters

var specialChars = ["@", "%", "+", "!", "#", "$", "?", "."];



function generatePassword () {

  // var passwordLength = i >= 8 || i <= 128; (min 8, max 128)

  var passwordLength = prompt("How many characters do you want your password to be? Must be between 8 and 128 characters.");

  // IF user does not follow character conditions

  if ( !(passwordLength >=8 || passwordLength <= 128) ) {
  alert ("I'm sorry, this does not meet our parameters.")
  return;
  }

  // DECLARE a new list of "charactersInPassword" 

  var charactersInPassword = [];

    // DECLARE a new 'password' string
    var password = "";

  // CONFIRM password conditions

  var upperCaseConfirm = confirm("Do you want to include upper case letters?");

  //IF user confirms
  //PUSH "upperCase" into "charactersInPassword" list
  //AND APPEND one random upperCase from "upperCase" list

  if (upperCaseConfirm) {
  charactersInPassword.push(upperCase);
  }
  
  var lowerCaseConfirm = confirm("Do you want to include lower case letters?");
  //IF user confirms 
  //push "lowerCase" into "charactersInPassword" list
  //AND APPEND one random lowerCase from "lowerCase" list
  
  if (lowerCaseConfirm) {
  charactersInPassword.push(lowerCase);
  }
  
  var numbersConfirm = confirm("Do you want to include numbers?");

  //IF user confirms 
  //push "numbers" into "charactersInPassword" list
  //AND APPEND one random number from "numbers" list

  if (numbersConfirm) {
  charactersInPassword.push(numbers);
  }

  var speicalCharsConfirm = confirm("Do you want to include special characters?");

  //IF user confirms
  //push "specialChars" into "charactersInPassword" list
  //AND APPEND one random special character from "specialChars" list

  if (speicalCharsConfirm) {
  charactersInPassword.push(specialChars);
  }

  // IF NOT "charactersInPassword.length"
  // THEN ALERT user they must meet the criteria and pick characters to use
  // AND EXIT FUNCITON (empty return)


  while (password.length < passwordLength) {

  // Select "randomCharacter" from "charactersInPassword"
  //APPEND "randomCharacter" to "password" string
  }

  return password;

}



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//for loop

// call generate password
