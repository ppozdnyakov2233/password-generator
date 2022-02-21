

document.querySelector("#generate").addEventListener("click",writePassword);



var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



var length = "";
var confirmSpecialChar;
var confirmNumericChar;
var confirmUpperChar;
var confirmLowerChar;



function getPasswordOption() {
  var length = parseInt(
      prompt("How many characters you want in your password?"));



  while(confirmLength <= 7 || confirmLength >= 128) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }

  alert(`Your password will have ${length} characters`);


 

  var confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericChar = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLowerChar = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperChar = confirm("Click OK to confirm if you would like to include uppercase characters");

  

  if (
      confirmUpperChar === false && 
      confirmLowerChar === false && 
      confirmSpecialChar === false &&
       confirmNumericChar === false)
        {
      alert("You must select at least one character type");

      var confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericChar = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerChar = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperChar = confirm("Click OK to confirm if you would like to include uppercase characters");
  }


  var passwordCharacters = []

  if (confirmSpecialChar)
   {
      passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmNumericChar)
   {
      passwordCharacters = passwordCharacters.concat(number)
  }
  
  if (confirmLowerChar)
   {
      passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmUpperChar) 
  {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  console.log(passwordCharacters)

  var randomPassword = ""



  return randomPassword;

}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}