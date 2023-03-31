// Assignment Code
var generateBtn = document.querySelector("#generate");

var charVaribles = {
  lowercase:['a','b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i','j','k','l','m','n','o','q','r','s','t','u','v','w','x','y','z',],
  uppercase:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',],
  numeric:['0','1','2','3','4','5','6','7','8','9'],
  specialCharaters: ['!','@','#','$','%','^','&','*','(',')','_','+','=','-','[',']','{','}',';',',','.',':','/','?','>','<'],
}

function generatePassword() {
  var password = '';
  var passwordLength = prompt('between 8-128, choose size of password');
  if (passwordLength < 8 || passwordLength > 128) {
    alert('password muct be 8-128 characters long');
    return;
  }
 var lowercase = confirm('Do you want lowercase letters?');
 var uppercase = confirm('Do you want uppercase letter?');
 var numeric = confirm('Do you want numbers?'); 
 var specialCharaters = confirm('Do you want SpecialCharacters?');
  if (!lowercase && !uppercase && !numeric && !specialCharaters){ 
   alert('You must choose one charater type');
    return;
  }
  
  var characterTypes = [];
  if (lowercase) {
    characterTypes = characterTypes.concat(charVaribles.lowercase);
    console.log(characterTypes)
  }
  if (uppercase) {
    characterTypes = characterTypes.concat(charVaribles.uppercase);
  }
 if (numeric) {
  characterTypes = characterTypes.concat(charVaribles.numeric);
 }
 if (specialCharaters) {
  characterTypes = characterTypes.concat(charVaribles.specialCharaters);
 }
 console.log(characterTypes)
 for (var i = 0; i < passwordLength; i++) {
  var rand = Math.floor(Math.random() * characterTypes.length) 
  console.log(rand)
  var character = characterTypes[rand];
  password += character;
 }
return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
