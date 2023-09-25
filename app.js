var allower = prompt("Enter your name");

userInput = allower.toUpperCase();

var x = "Hello World"; 
x = x.toLowerCase();

var originalString = "Hello World"; 
var lowerCaseString = originalString.toLowerCase();

alert(lowerCaseString); 

var myArray = ["Hello", "World"];
var index = 0; 

var lowerCaseString = myArray[index].toLowerCase(); 

console.log(lowerCaseString); 

var cityName = "kaRacHi";
var upperCaseCity = cityName.toUpperCase();
alert(upperCaseCity);

var cityName = "kaRacHi";
var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
alert(capitalizedName);

var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3); 
alert(slicedPart);

var sameWords = "captain";
var characterCount = sameWords.length;

alert(characterCount);

var animal = "elephant";
var startIndex = Math.floor(animal.length / 2) - 2;
var fit = animal.slice(startIndex, startIndex + 4);
alert(fit);

var myString = "Hello, World!";
var characterCount = myString.length; 

alert(characterCount);

var myString = "ThisIsASampleString";
var characterCount = myString.length; 
var slicedString = myString.slice(1, -3); 

console.log(characterCount); 
console.log(slicedString);

var text = "Let's go to the cinema, grab some popcorn, and go for a walk in the park.";
var lastIndex = text.lastIndexOf("go");
var indx = lastIndex;

alert(indx);


var text = "This is a sample text.";
var cha = text.charAt(9); 

alert(cha);

var str = "Hello, World!";
var x = str.charAt(str.length - 1); 

alert(x); 

var str = "1, 2, 3, 4, 1";
var newStr = str.replace("1", "one");

console.log(newStr); 

var roundedNumber = Math.round(3.7);

alert(roundedNumber); 

var origNum = 3.7; 
var roundNum = Math.ceil(origNum); 

alert(roundNum); 

var origNum = 3.7; 
var roundNum = Math.floor(origNum); 

console.log(roundNum); 

var originalNumber = 3.7; 
var roundedNumber = Math.round(originalNumber);

alert(roundedNumber);

var originalNumber = 0.5; 
var roundedNumber = Math.floor(originalNumber);


alert(roundedNumber); 

var randomNumber = Math.floor(Math.random() * 50) + 1;

var newRandomNumber = Math.random();

document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    const diceResult = document.getElementById("diceResult");

    rollButton.addEventListener("click", function () {
        const min = 1; 
        const max = 6; 
        const result = Math.floor(Math.random() * (max - min + 1)) + min; 

        diceResult.textContent = `You rolled a ${result}`;
    });
});









