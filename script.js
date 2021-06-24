var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', '<', '>', '?', '/', '[', ']'];
var Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var superArray = []; 

    // Assignment Code
var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

        // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt pops up:
function generatePassword(){
        
    var welcomMsg = confirm('welcome to password generator! You will be selecting at least 1 character type.');
    console.log(welcomMsg)

    if (welcomMsg === true){
        console.log('yes they confirmed and want to start')
    } else {
        console.log('see you later');
        alert('see you later');
    }

    var lengthMsg = parseInt(prompt('enter the length of characters, it must be more than 9 and less than 128'));
    console.log(lengthMsg);
    if ((lengthMsg >= 9 && lengthMsg <= 128) && (!isNaN(lengthMsg))){
        console.log('Sucess! this number is approved.');
    } else {
        console.log('wrong, try again');
        alert('must be more than 9 and less than 128');
    }


    var lowercaseMsg = confirm('Do you want lower case characters in your password?');
    console.log(lowercaseMsg);
    if (lowercaseMsg === true) {
        console.log('add in lowercase characters');
        superArray = superArray.concat(lowerCase);  
    } else {
        console.log('too bad, lowercase letters are cool');
    }

    var uppercaseMsg = confirm('Do you want upper case characters in your password?');
    console.log(uppercaseMsg);
    if (uppercaseMsg === true) {
        console.log('add in upper characters');
        superArray = superArray.concat(upperCase); 
    } else {
        console.log('too bad, upper case letters are cool');
    }

    var specialcharactersMsg = confirm('Do you want special characters in your password?');
    console.log(specialcharactersMsg);
    if (specialcharactersMsg === true) {
        console.log('add in special characters');
        superArray = superArray.concat(specialCharacters);
    } else {
        console.log('too bad, special characters are cool');
    }
    
    var numberMsg = confirm('Do you want number characters in your password?');
    if (numberMsg === true) {
        console.log('add in number characters');
        superArray = superArray.concat(Numbers);
        console.log(numberMsg)
    } else {
        console.log('too bad, numbers are cool');   
    }
    var password = '';
    for (var index = 0; index < lengthMsg;  index++) {
    
        var randomNumber = Math.floor(Math.random() * superArray.length);
        password += superArray[randomNumber];
    }

    return password;

}
