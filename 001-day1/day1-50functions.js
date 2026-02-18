
/*======================================*/
          // 1 - 10 FUNCTIONS
/*======================================*/

// 1
function getNumber() {
    return 42;
}
// 2
function getString() {
    return "hello";
}


// 3
function getBoolean() {
    return true;
}
// 4
function giveArray() {
    return ["Javor", "Alex", "Albert"];
}
// 5
function createObject() {
    return {
        coder: "Javor",
        study: () => "Mastering Functions in JavaScript"
    };
}
// 6
function getNothing() {
    return null;
}
// 7
function getUndefinedValue() {
    
}
// 8
function createFunction() {
    return () => "I'm returned function";
}
// 9
function getAge() {
    return 30;
}
// 10
function getName() {
    return "Javor";
}


/*======================================*/
          // 11 - 20 FUNCTIONS
/*======================================*/

// 11
function dateToday() {
    return new Date();
}
console.log(dateToday());
// 12
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max -min + 1)) + min;
}
console.log(randomNumber(20, 10));
// 13
function getBoolean() {
    return false;
}
// 14
function getNumbersArray() {
    return [1, 2, 3, 4, 5];
}
// 15
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
// 16
function getNothing() {
    return null;
}
console.log(getNothing());
// 17
function giveUndefinedValue(name) {
}
console.log(giveUndefinedValue("Javor"));
// 18
function createFunction() {
    return () => "Doesn't just console.log";
}
let getFunction = createFunction();
console.log(getFunction());
// 19
function createEmptyArray() {
    return [];
}
// 20
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

// 21
function getHello() {
    return "hello";
}
// 22
function reverseString(str) {
    return str.split("").reverse().join("");
} 
// 23
function getCurrentDay() {
    return `${new Date()}`;
}
// 24
function getLongerString(str1, str2) {
    return (str1.length > str2.length) ? str1 : str2; 
}
// 25
function getRandomBoolean() {
    return (Math.floor(Math.random() * 2)) ? true : false;
}
// 26
function checkEvenOrOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}
// 27
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
// 28
function createNameAndTimeObject(name) {

    return {
        name: name,
        currentTime: new Date().toLocaleTimeString()
    }
}
// 29
function getDoubleFunction() {
    return (x) => x * 2; 
}
// 30
function getFirstElement(arr) {
    return arr[0];
}


/*======================================*/
          // 31 - 40 FUNCTIONS
/*======================================*/

// 31
function getSquare(num) {
    return num * num;
}
// 32
function getAverage(num1, num2) {
    return (num1 + num2) / 2;
}
// 33
function sum(arr) {
    return arr.reduce((acc, curr) => {
        return acc += curr;
    }, 0);
}
// 34
function turnToUpperCase(str) {
    return str.toUpperCase();
}
// 35
function getVowels(str) {
    let vowels = "aeiou";
    let vowelsInStr = vowels.split("").filter(v => str.toLowerCase().includes(v) ); 

    return vowelsInStr.length;
}
// 36
function getRandomElement(arr) {
    let index = Math.floor(Math.random() * arr.length);

    return arr[index];
}
// 37
function checkPositiveOrNegativeOrZero(num) {
    if(num > 0) return "Positive"
    if(num < 0) return "Negative"
    if(num === 0) return "Zero"
}
// 38
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
// 39
function createPersonObject(name, age) {
    return {
        _name: name,
        _age: age,
        introduceYourself () {
          return `Hello, I'm ${this._name} and I'm ${this._age} years old`}
    }
}
// 40
function getAddFunction(num) {
    return (x) => num + x; 
}


/*======================================*/
          // 41 - 50 FUNCTIONS
/*======================================*/

// 41
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
// 42
function createArrayOfEvenNumbers(num) {
    let arr = [];
    for(let i = 0; i <= num; i++) {
        if(i % 2 === 0) arr.push(i)
    }
  return arr;
}
// 43
function removeDuplicatesFromArray(arr) {
    let uniqueArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
    }
// 44
function createLetterCountObject(str) {
        return str
        .split("")
        .reduce((acc, curr) => {
            acc[curr] = acc[curr] ?? 0;
            acc[curr]++;
            return acc;
        }, {});
    }
// 45
function checkCommonElements(arr1, arr2) {
        if(arr1.length === 0 || arr2.length === 0) return "Arrays shouldn't be empty";

        for(let i = 0; i < arr2.length; i++) {
               if(arr1.includes(arr2[i])) {
                return true;
               }
        }
        return false;
    }

// 46
function getFactorial(num) {
        let product = 1;
        for(let i = 1; i <= num; i++) {
            product *= i;
        }

        return product;
    }

// 47
function getSecondLargestNumber(numbers) {
        const sortedNumber = [...numbers].sort((a, b) => a - b); 

        return sortedNumber[sortedNumber.length - 2];
    }

// 48
function getEveryOtherLetterCapitalized(str) {
        
        return str.split("").map((el, index) => {
            if(index % 2 !== 0) {
             return   el.toUpperCase()
            }
            return el.toLowerCase();
        }).join("");
    }
// 49
function getRandomOrderArrayElements(arr) {
        
        let newArr = [...arr];
        for(let i = newArr.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    }
// 50
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

