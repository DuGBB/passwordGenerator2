// possible character choices
var upperAlph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerAlph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersEl = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~',']'];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {//function to generate a random password on criteria based on user input
  let pwLength = 0;
    while (pwLength < 8 || pwLength > 128 || pwLength === null) {//validating password length
      pwLength = prompt("Please choose a password between 8 and 128 character's in length.");
      if (isNaN(pwLength)) {
        alert("Must input and integer!")
        pwLength = null;
      }
    };
    let upper = false;
    let lower = false;
    let number = false;
    let special = false;
    while (!upper && !lower && !number && !special) {//validating at least one character array is chosen
      upper = confirm("Do you want to include uppercase letters?");
      lower = confirm("Do you want to include lowercase letters?");
      number = confirm("Do you want to include numbers?");
      special = confirm("Do you want to include special characters?");
    }

  let combinedArrs = [];//building character type array based on user input
  if (upper) {
    combinedArrs = combinedArrs.concat(upperAlph);
  };
  if (lower) {
    combinedArrs = combinedArrs.concat(lowerAlph);
  };
  if (number) {
    combinedArrs = combinedArrs.concat(numbersEl);
  };
  if (special) {
    combinedArrs = combinedArrs.concat(specialChar);
  };
  var passwordBuild = "";
  console.log('--------------------');
  console.log(pwLength);
  for (let index = 0; index < Math.floor(pwLength); index++) {
    let val = Math.floor(Math.random() * combinedArrs.length);
    console.log(val);
    console.log(combinedArrs[val]);
    passwordBuild = passwordBuild + combinedArrs[val];
  }
  console.log('--------------------');
  console.log(combinedArrs);
  console.log(upper);
  console.log(lower);
  console.log(number);
  console.log(special);
  return passwordBuild;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
