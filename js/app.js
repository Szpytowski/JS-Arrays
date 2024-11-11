"use strict"

// Basic exercises
for (let i =0; i < 5; i++) {
  console.log('hello world')
}

let person = {
  name: 'josh',
  age: 18
};

person.name = 'Bosh';
console.log(person);
person['name']='Mary'
console.log(person);

let selectedColors = ['red', 'green', 'blue'];
selectedColors [3] = 'purple'
console.log(selectedColors);
console.log(selectedColors.length);

 function greet (name, lastname) {
   console.log('hello ' + name + '' + lastname);
 }

greet('Victor', 'Oshimen');
greet('Mary', 'Jane');

function square(number) {
  return number * number;
}
console.log(square(5));


function increase(number) {
  number++;
  return number;
}

console.log(increase(5));



// Homework
const thingsInHome = ["mint", "basil", "cactus", "table", "wooden spoon", "bread"];
const thingsInGarden = ["apple", "trees", "stairs", "plum", "wooden bench"];

// -- edit below --
const madeOutOfWood = [thingsInHome[3], thingsInGarden[4]];
const edibles = [thingsInHome[0], thingsInHome[1], thingsInHome[5], thingsInGarden[0], thingsInGarden[3]];
// -- edit above --

console.log(
  `made out of wood: ${JSON.stringify(madeOutOfWood)}\n edibles: ${JSON.stringify(edibles)}`
);


// 2 for loop
function getSmallestNumber(numbers) {
  let smallestNumber = numbers[0]
  for (let i = 0; i < numbers.length; ++i) {
    if (smallestNumber > numbers[i]) {
     smallestNumber = numbers[i];
    }
  }
  return smallestNumber;
}

console.log(getSmallestNumber([2, -5, 10, 1, 4])); // -5
getSmallestNumber([200, 25, 4, 123, 87]); // 4

// 2.5 sort function

function giveSmallestNumber(numbers) {
  return numbers.sort((a, b) => a - b)[0];
}

console.log(giveSmallestNumber([2, -5, 10, 1, 4])); // -5
console.log(giveSmallestNumber([200, 25, 4, 123, 87])); // 4

// 3
console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]

function getSquaredNumbers(numbers) {
  let squaredArray = []
  for (let i = 0; i < numbers.length; i++) {
    let square = numbers[i] * numbers[i];
    squaredArray.push(square);
  }
  return squaredArray;
}

// function
// make new array
// lets multiply the array by itself
// push it in the array
// return the squaredArray

const numbers = [1, 2, 3];
const squaredNumbers = getSquaredNumbers(numbers);

console.log(squaredNumbers); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]
console.log(numbers !== squaredNumbers); // true

// 4
function getReversedString(string) {
  return string.split('').reverse().join('').replace(/\s+/g, '');
}

console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'

// 5
// make a ispalindrome function
// it will delete spaces and capital cases and compare it with the getreversed
// do the same as above
// return true if both are the same

// found the delete spaces on https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
// tolowerCase https://stackoverflow.com/questions/56369008/replace-capital-letters-in-an-entire-string-with-lowercase-letters-and-hyphens


function isPalindrome(string){
  const normaliseString = string.replace(/\s+/g, '').toLowerCase(); // made it without the spaces and capital letters
  return normaliseString === getReversedString(string).toLowerCase();
}

console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')) // true
console.log(isPalindrome('Hello!')); // false

// 6
// make function
// make an empty value where the letter will be counted
// transform the sentence so it deletes the spaces and uppercases
// make every letter compare with one letter to make it simple in beginning
// if true add 1 to that letter
// return an object with the count
// if it works, repeat for the whole alphabet

const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

function countLetters(string) {
  let transformText = string.replace(/\s+/g, '').toLowerCase();
  let countA = 0, countB = 0, countC = 0, countD = 0, countE = 0, countF = 0, countG = 0, countH = 0,
    countI = 0, countJ = 0, countK = 0, countL = 0, countM = 0, countN = 0, countO = 0, countP = 0,
    countQ = 0, countR = 0, countS = 0, countT = 0, countU = 0, countV = 0, countW = 0, countX = 0,
    countY = 0, countZ = 0;

  for (let i = 0; i < transformText.length; i++) {
    if (transformText[i] === 'a') countA++;
    else if (transformText[i] === 'b') countB++;
    else if (transformText[i] === 'c') countC++;
    else if (transformText[i] === 'd') countD++;
    else if (transformText[i] === 'e') countE++;
    else if (transformText[i] === 'f') countF++;
    else if (transformText[i] === 'g') countG++;
    else if (transformText[i] === 'h') countH++;
    else if (transformText[i] === 'i') countI++;
    else if (transformText[i] === 'j') countJ++;
    else if (transformText[i] === 'k') countK++;
    else if (transformText[i] === 'l') countL++;
    else if (transformText[i] === 'm') countM++;
    else if (transformText[i] === 'n') countN++;
    else if (transformText[i] === 'o') countO++;
    else if (transformText[i] === 'p') countP++;
    else if (transformText[i] === 'q') countQ++;
    else if (transformText[i] === 'r') countR++;
    else if (transformText[i] === 's') countS++;
    else if (transformText[i] === 't') countT++;
    else if (transformText[i] === 'u') countU++;
    else if (transformText[i] === 'v') countV++;
    else if (transformText[i] === 'w') countW++;
    else if (transformText[i] === 'x') countX++;
    else if (transformText[i] === 'y') countY++;
    else if (transformText[i] === 'z') countZ++;
  }

  return {
    a: countA, b: countB, c: countC, d: countD, e: countE, f: countF, g: countG, h: countH,
    i: countI, j: countJ, k: countK, l: countL, m: countM, n: countN, o: countO, p: countP,
    q: countQ, r: countR, s: countS, t: countT, u: countU, v: countV, w: countW, x: countX,
    y: countY, z: countZ
  };
}

console.log(lettersObject);
// {
//   a: 1
//   b: 1
//   c: 1
//   d: 1
//   e: 3
//   f: 1
//   g: 1
//   h: 2
//   i: 1
//   j: 1
//   k: 1
//   l: 1
//   m: 1
//   n: 1
//   o: 4
//   p: 1
//   q: 1
//   r: 2
//   s: 1
//   t: 2
//   u: 2
//   v: 1
//   w: 1
//   x: 1
//   y: 1
//   z: 1
//

// 7
const peopleArray = [
  {
    name: 'Adam',
    age: 20
  },
  {
    name: 'Amanda',
    age: 5
  },
  {
    name: 'John',
    age: 75
  },
  {
    name: 'Dave',
    age: 15
  }
]

// we sort the ages from youngest to oldest
// we extract the first age and return it as the youngest person


console.log(peopleArray);
function getYoungestPerson(people) {
  peopleArray.sort(function (a, b) {
    return a.age - b.age;
  })
  return people[0]
}

function getOldestPerson(people) {
  peopleArray.sort(function (a, b) {
    return a.age - b.age;
  })
  return people[people.length - 1]; // want to return the last person on the sorted array
}

function getAgeDifference(people) {
  return getOldestPerson(people).age - getYoungestPerson(people).age
}

console.log(getYoungestPerson(peopleArray)); // 5
console.log(getOldestPerson(peopleArray)); // 75
console.log(getAgeDifference(peopleArray)); // 70

// 8
function positiveNumFilter(numbers) {
  let positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  return positiveNumbers;
}

function positiveSum(numbers){
  const positiveNumbers = positiveNumFilter(numbers);
  let sum = 0
  for (let i = 0; i < positiveNumbers.length; i++) {
    sum = sum + positiveNumbers[i];
  }
  return sum
}

// we have to filter out the positive numbers
// we have to get the positive numbers and sum them

console.log(positiveNumFilter([-200, 2, 4, 5, 6, 7]))
console.log(positiveSum([-200, 2, 4, 5, 6, 7]))

// 9
function squareSum(numbers){
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += (numbers[i] * numbers[i]);
  }
  return result;
}

// 10
function abbrevName(name){
  let nameArray = name.split(" ")
  let first = nameArray[0];
  let last = nameArray[1];
  let initials = first[0] +'.'+last[0];
  return initials.toUpperCase();
}

// 11
function countSheeps(sheep) {
  let count = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i]) {
      count++;
    }
  }

  return count;
}

// 12
function digitize(numbers) {
  let reversedArray = [];
  let str = numbers.toString().split('').reverse();

  for (let i = 0; i < str.length; i++) {
    reversedArray.push(Number(str[i])); // I got error that i returned an array of strings instead of numbers , so I found https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
// the Number() function
  }

  return reversedArray;
}

// 13
// make function
// loop through the haystack
// the condition is that we have to find the "needle"
// return "found the ..." and give the index where it was found / postioin +i

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}

// 14
// make function
// make new empty array, where we will store ou oubled numbers
// loop trhough the given array
// every loop we want to double it *2
// we want to push those numbers back to the empty array
// return the empty array as our answer

function maps(numbersToBeDoubled) {
  const doubledNumbers = [];

  for (let i = 0; i < numbersToBeDoubled.length; i++) {
    const doubledValue = numbersToBeDoubled[i] * 2;
    doubledNumbers.push(doubledValue);
  }

  return doubledNumbers;
}

// 15
// idem as the assignment above, but here we will invert each number with each loop
function invert(array) {
  const inverses = [];

  for (let i = 0; i < array.length; i++) {
    const inverseNumber = array[i]*-1;
    inverses.push(inverseNumber);
  }

  return inverses;
}

// 16
function sum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// 17
function getArraySum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function arrayPlusArray(firstArray, secondArray) {
  const total1 = getArraySum(firstArray);
  const total2 = getArraySum(secondArray);
  return total1 + total2;
}

// 18
// make a function that counts sheeps
// make an empty string where we wil count how many sheeps there are
// make a loop and with every loop we count the sheep with the index it is looping through
// return the the sheep counting string

function countSheep(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += (i + ' sheep...');
  }

  return result;
}

// 19
// make function
// make empty variable that stores the avarage
// loop the results and add it to the total score

function getAverage(marks) {
  let totalScore = 0;
  for (let i = 0; i < marks.length; i++) {
    totalScore += marks[i];
  }
  let avarageScore = totalScore / marks.length;

  return Math.floor(avarageScore); // I found this https://www.w3schools.com/jsref/jsref_floor.asp#:~:text=JavaScript%20Math.floor()&text=The%20Math.floor()%20method,DOWN%20to%20the%20nearest%20integer.
}

// 20
function monkeyCount(number) {

  let monkeys = [];
  for (let i = 0; i < number; i++) {
    monkeys.push(i + 1);
  }

  return monkeys;
}


// SIDE EXERCISE
const admins = [
  {
    name: 'bob',
    isActive: true
  },
  {
    name: 'Mark',
    isActive: true
  },
  {
    name: 'Maria',
    isActive: false
  },
]

const friends = [
  {
    name: 'Kate',
    isActive: true
  },
  {
    name: 'Amy',
    isActive: false
  },
  {
    name: 'John',
    isActive: true
  },
];

function checkUser(user) {
  return user.isActive;
}

function filterOutInactiveUsers (users) {
  const activeUsersArr = [];
  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    if (currentUser.isActive) {
      activeUsersArr.push(currentUser);
    }
  }
  return activeUsersArr
}
const activeUsers = filterOutInactiveUsers(admins);

console.log(activeUsers);

/**
 make empty array for active users
 filter out inactive users by using the function above
 push them to the activeuserarr
 */

function mergeOnlyActiveUsers(firstUsersArr, secondUsersArr) {
  const firstUsersActiveArr = filterOutInactiveUsers(firstUsersArr);
  const secondUsersActiveArr = filterOutInactiveUsers(secondUsersArr);
  const activeUsersArr = firstUsersActiveArr.concat(secondUsersActiveArr);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  return activeUsersArr
}

const mergedArrays = mergeOnlyActiveUsers(admins, friends);

console.log(mergedArrays);
