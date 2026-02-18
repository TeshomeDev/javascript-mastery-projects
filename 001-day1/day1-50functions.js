
/*======================================*/
          // 1 - 10 FUNCTIONS
/*======================================*/

// return a number
function getNumber() {
    return 42;
}

function getString() {
    return "hello";
}


// - return a boolean true
function getBoolean() {
    return true;
}
// - return an array
function giveArray() {
    return ["Javor", "Alex", "Albert"];
}
// - return an object
function createObject() {
    return {
        coder: "Javor",
        study: () => "Mastering Functions in JavaScript"
    };
}
// - return null
function getNothing() {
    return null;
}
// - return undefined
function getUndefinedValue() {
    
}
// - return a function
function createFunction() {
    return () => "I'm returned function";
}
// - return your age
function getAge() {
    return 30;
}
// - return your name
function getName() {
    return "Javor";
}


/*======================================*/
          // 11 - 20 FUNCTIONS
/*======================================*/

// return today's Date
function dateToday() {
    return new Date();
}
console.log(dateToday());
// return random number between max and min
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max -min + 1)) + min;
}
console.log(randomNumber(20, 10));
// - return a boolean false
function getBoolean() {
    return false;
}
// - return numbers array
function getNumbersArray() {
    return [1, 2, 3, 4, 5];
}
// - return an object
function createObject() {
    return {
        coder: "Javor",
        age: 30,
        career: "Developer",
        heIsDoing: () => "Mastering Functions in JavaScript"
    };
}
const dev = createObject();
console.log(`${dev.coder} is ${dev.age} years old ${dev.heIsDoing()}`);
// - return null
function getNothing() {
    return null;
}
console.log(getNothing());
// - return undefined
function giveUndefinedValue(name) {
}
console.log(giveUndefinedValue("Javor"));
// - return a function
function createFunction() {
    return () => "Doesn't just console.log";
}
let getFunction = createFunction();
console.log(getFunction());
// - return empty array
function createEmptyArray() {
    return [];
}
// - return object with methods
function greetGuest(greeting) {
    return {
        greet: (name) => `${greeting}, ${name}! Welcome to our function drill session.`
    };
}

 const greeting = greetGuest("Hi");
    let welcome = greeting.greet("Javor");
    console.log(welcome);


/*======================================*/
          // 21 - 30 FUNCTIONS
/*======================================*/

// returns a string
function getHello() {
    return "hello";
}
//returns a reversed string
function reverseString(str) {
    return str.split("").reverse().join("");
} 
// returns today's date as a string
function getCurrentDay() {
    return `${new Date()}`;
}
// returns the longer of two strings
function getLongerString(str1, str2) {
    return (str1.length > str2.length) ? str1 : str2; 
}
// returns a random boolean value
function getRandomBoolean() {
    return (Math.floor(Math.random() * 2)) ? true : false;
}
// returns even or odd based on the input number 
function checkEvenOrOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}
// returns an array of 5 random numbers between max and min, with a minimum difference of 5 between them
function getFiveRandomNumbers(min, max) {

     if((max - min) < 5) {
        return "Minimum difference between the numbers should be 5";
    }
    const arr = [];
    for(let i = 0; i < 5; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + 1) + min);
    }

    return arr;
}
// returns an object with the name and current time
function createNameAndTimeObject(name) {

    return {
        name: name,
        currentTime: new Date().toLocaleTimeString()
    }
}
// returns a function that takes a number and returns the number multiplied by 2
function getDoubleFunction() {
    return (x) => x * 2; 
}
// returns the first element of an array
function getFirstElement(arr) {
    return arr[0];
}


/*======================================*/
          // 31 - 40 FUNCTIONS
/*======================================*/

function getSquare(num) {
    return num * num;
}

function getAverage(num1, num2) {
    return (num1 + num2) / 2;
}

function sum(arr) {
    return arr.reduce((acc, curr) => {
        return acc += curr;
    }, 0);
}

function turnToUpperCase(str) {
    return str.toUpperCase();
}

function getVowels(str) {
    let vowels = "aeiou";
    let vowelsInStr = vowels.split("").filter(v => str.toLowerCase().includes(v) ); 

    return vowelsInStr.length;
}

function getRandomElement(arr) {
    let index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function checkPositiveOrNegativeOrZero(num) {
    if(num > 0) return "Positive"
    if(num < 0) return "Negative"
    if(num === 0) return "Zero"
}

function getLongestString(arr){
    let longestString = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    } 

    return {
        word: `Longest word: ${longestString}`,
        position: `Word's index: ${arr.indexOf(longestString)}`
    };

}

function createPersonObject(name, age) {
    return {
        _name: name,
        _age: age,
        introduceYourself () {
          return `Hello, I'm ${this._name} and I'm ${this._age} years old`}
    }
}

function getAddFunction(num) {
    return (x) => num + x; 
}


/*======================================*/
          // 41 - 50 FUNCTIONS
/*======================================*/


function getLongestWord(sentence) {
    let arr = sentence.split(" ");
    let longestWord = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }

    return longestWord;
}

function createArrayOfEvenNumbers(num) {
    let arr = [];
    for(let i = 0; i <= num; i++) {
        if(i % 2 === 0) arr.push(i)
    }
  return arr;
}
// 
function removeDuplicatesFromArray(arr) {
    let uniqueArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
    }

    function createLetterCountObject(str) {
        return str
        .split("")
        .reduce((acc, curr) => {
            acc[curr] = acc[curr] ?? 0;
            acc[curr]++;
            return acc;
        }, {});
    }

    function checkCommonElements(arr1, arr2) {
        if(arr1.length === 0 || arr2.length === 0) return "Arrays shouldn't be empty";

        for(let i = 0; i < arr2.length; i++) {
               if(arr1.includes(arr2[i])) {
                return true;
               }
        }
        return false;
    }


    function getFactorial(num) {
        let product = 1;
        for(let i = 1; i <= num; i++) {
            product *= i;
        }

        return product;
    }


    function getSecondLargestNumber(numbers) {
        const sortedNumber = [...numbers].sort((a, b) => a - b); 

        return sortedNumber[sortedNumber.length - 2];
    }


    function getEveryOtherLetterCapitalized(str) {
        
        return str.split("").map((el, index) => {
            if(index % 2 !== 0) {
             return   el.toUpperCase()
            }
            return el.toLowerCase();
        }).join("");
    }



    function getRandomOrderArrayElement(arr) {
        
        let newArr = [];
        while(newArr < arr.length) {
            let index = Math.floor(Math.random() * arr.length);
            if(!newArr.includes(arr[index])) {
                newArr.push(arr[index]);
            }
            
        }

        return newArr;
    }

    function getFunctionRunningOriginalFunctionNumberTimes(fn, times) {
        // I'm beaten by this challenge
        return () => {
            let results = [];
            for(let i = 0; i < times; i++) {
                results.push(fn());
        }
        return results;
    }
}
    
    // Bonus challenge

    function analyzeLongestWord(sentence) {
        let wordsArray = sentence.split(" ");

        let longestWord = wordsArray[0];
        
        for(let i = 0; i < wordsArray.length; i++) {
            if(wordsArray[i].length > longestWord.length) {
                longestWord = wordsArray[i];
            }
        }
        return {
            word: longestWord,
            letterCount: longestWord.length
        }
    }

