// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array list of numbers

var numbers = "0123456789".split("");

// Array list of lowercase letters

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

// Array list of uppercase letters

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Array list of special characters

var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ".split("");

console.log(specialChars);

  // DECLARE a new list of "charactersInPassword" 

  var charactersInPassword = [];

  // DECLARE a new 'password' string
  var password = [];

function generatePassword () {

  // var passwordLength = i >= 8 || i <= 128; (min 8, max 128)

  var passwordLength = prompt("How many characters do you want your password to be? Must be between 8 and 128 characters.");

  // IF user does not follow character conditions

  if ( (passwordLength < 8 || passwordLength > 128) ) {
  alert ("I'm sorry, this does not meet our parameters.")
  return;
  }


  // CONFIRM password conditions

  var upperCaseConfirm = confirm("Do you want to include upper case letters?");

  //IF user confirms
  //PUSH "upperCase" into "charactersInPassword" list

  if (upperCaseConfirm) {
  charactersInPassword.push(...upperCase);
  }
  
  var lowerCaseConfirm = confirm("Do you want to include lower case letters?");
  //IF user confirms 
  //push "lowerCase" into "charactersInPassword" list
  
  if (lowerCaseConfirm) {
  charactersInPassword.push(...lowerCase);
  }
  
  var numbersConfirm = confirm("Do you want to include numbers?");

  //IF user confirms 
  //push "numbers" into "charactersInPassword" list

  if (numbersConfirm) {
  charactersInPassword.push(...numbers);
  }

  var speicalCharsConfirm = confirm("Do you want to include special characters?");

  //IF user confirms
  //push "specialChars" into "charactersInPassword" list

  if (speicalCharsConfirm) {
  charactersInPassword.push(...specialChars);
  }

  //
  for (var i = 0; i < passwordLength; i++) {
    password = password + charactersInPassword[Math.floor(Math.random()*charactersInPassword.length)];

    console.log(charactersInPassword);

    console.log(password);
   
    
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




