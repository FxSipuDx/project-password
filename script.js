var passwordSize = document.getElementById('passwordsize');
var upperCaseCharacter = document.getElementById('uppercase');
var specialCharacter = document.getElementById('specialcharacter');
var topTextValue = document.getElementById('topvalue');
var generateButton = document.getElementById('generatebutton');
var userOutput = document.getElementById('useroutput');
var sliderValue;

passwordSize.addEventListener("input",function(){
    sliderValue = parseInt(passwordSize.value);
    topTextValue.textContent = sliderValue.toString();
});
function placeElementRandomly(element){
    
    randomIndex = Math.floor(Math.random()*sliderValue);
    while(password[randomIndex]!== undefined){
        randomIndex++;
        if(randomIndex===sliderValue){
            randomIndex=0;
        }
    }
    password[randomIndex]= element;
}
function generatePassword(){
    event.preventDefault();
    generatedPassword = "";
    password = [];
    var characterSize = sliderValue;
    if(upperCaseCharacter.checked && specialCharacter.checked){
        characterSize-=2;
        var randomUpperAscii = Math.floor(Math.random()*26)+65;
        var randomUpperCharacter = String.fromCharCode(randomUpperAscii);
        placeElementRandomly(randomUpperCharacter);
        var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '-', '+', '=', '?', '_', ',', '.', ':', ';', '"', "'", '/', '\\', '|', '~', '`', '(', ')', '[', ']', '{', '}', '<', '>'];
        var randomSpecialCharacter = Math.floor(Math.random()*specialCharacters.length);
        placeElementRandomly(specialCharacters[randomSpecialCharacter]);
    }else if(upperCaseCharacter.checked){
        characterSize-=1;
        var randomUpperAscii = Math.floor(Math.random()*26)+65;
        var randomUpperCharacter = String.fromCharCode(randomUpperAscii);
        placeElementRandomly(randomUpperCharacter);
    }else if(specialCharacter.checked){
        characterSize-=1;
        var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '-', '+', '=', '?', '_', ',', '.', ':', ';', '"', "'", '/', '\\', '|', '~', '`', '(', ')', '[', ']', '{', '}', '<', '>'];
        var randomSpecialCharacter = Math.floor(Math.random()*specialCharacters.length);
        placeElementRandomly(specialCharacters[randomSpecialCharacter]);
    }
    for(var i = 0;i<characterSize;i++){
        var randomLowerAscii = Math.floor(Math.random()*26)+97;
        var randomLowerCharacter = String.fromCharCode(randomLowerAscii);
        placeElementRandomly(randomLowerCharacter);
    }
    for(var i = 0;i<sliderValue;i++){
        generatedPassword += password[i]
    }
    userOutput.textContent = generatedPassword;
}
generateButton.addEventListener('click',generatePassword);

