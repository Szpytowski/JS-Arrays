// 1
const thingsInHome = ["mint", "basil", "cactus", "table", "wooden spoon", "bread"];
const thingsInGarden = ["apple", "trees", "stairs", "plum", "wooden bench"];

const madeOutOfWood = [thingsInHome[3], thingsInHome[4], thingsInGarden[4], thingsInGarden[1]];
const edibles = [thingsInHome[0], thingsInHome[1], thingsInHome[5], thingsInGarden[0], thingsInGarden[3]];

console.log(
  `made out of wood: ${JSON.stringify(madeOutOfWood)}\n edibles: ${JSON.stringify(edibles)}`
);

// 2
function getSmallestNumber(numbers) {
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

console.log(getSmallestNumber([2, -5, 10, 1, 4, 0]));
console.log(getSmallestNumber([200, 25, 4, 123, 87, 0]));

function getSmallestNumber(numbers) {
  const sortedArray = numbers.sort((a, b) => a - b); // (a, b) => a - b DEVELOPER.MOZILLA References JavaScript Reference Standard built-in objects Array Array.prototype.sort()
  return sortedArray[0];
}

console.log(getSmallestNumber([2, -5, 10, 1, 4, 0]));
console.log(getSmallestNumber([200, 25, 4, 123, 87]));

// 3
function getSquaredNumbers(numbers) {
  const squaredNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    squaredNumbers[i] = numbers[i] * numbers[i];
  }
  return squaredNumbers;
}

getSquaredNumbers([1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25]
getSquaredNumbers([6, 7, 8, 9, 10]); // [36, 49, 64, 81, 100]

const numbers = [1, 2, 3];
const squaredNumbers = getSquaredNumbers(numbers);
console.log(squaredNumbers); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]
console.log(numbers !== squaredNumbers); // true

// 4
function getReversedString(string) {
  const splitted = string.split('');
  const reversedSplit = splitted.reverse('')
  const joinedInAString = reversedSplit.join('');
  return joinedInAString;
}

console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'

// 5
function getReversedString(str) {
  const lowercaseNoSpaces = str.replace(/\s+/g, '').toLowerCase('');
  const splittedString = lowercaseNoSpaces.split('');
  const reversedArray = splittedString.reverse('');
  const reversedString = reversedArray.join('');
  return reversedString;
}

function isPalindrome(str) {
  const reversedStr = getReversedString(str);
  const normalizedStr = str.replace(/\s+/g, '').toLowerCase('');
  return normalizedStr === reversedStr;
}

console.log(isPalindrome('Kayak'));
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('Was it a cat I saw'));
console.log(isPalindrome('Hello!'));

// 6
function countLetters(text) {
  const letterCounts = {};
  const lowercaseNoSpaces = text.replace(/\s+/g, '').toLowerCase();

  for (let letter of lowercaseNoSpaces) {
    if (letter >= 'a' && letter <= 'z') {
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }
  return letterCounts;
}

const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

console.log(lettersObject);

// 7
function getYoungestPerson(people) {
  let youngest = people[0];
  for (let person of people) {
    if (person.age < youngest.age) {
      youngest = person;
    }
  }
  return youngest;
}

function getOldestPerson(people) {
  let oldest = people[0];
  for (let person of people) {
    if (person.age > oldest.age) {
      oldest = person;
    }
  }
  return oldest;
}

function getAgeDifference(people) {
  const youngest = getYoungestPerson(people);
  const oldest = getOldestPerson(people);
  return oldest.age - youngest.age;
}

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

console.log(getAgeDifference(peopleArray)); // 70

// 8
function positiveSum(arr) {
  let sum = 0;

  for (let number of arr) {
    if (number > 0) {
      const positiveNumber = number;
      const newSum = sum + positiveNumber;
      sum = newSum;
    }
  }

  return sum
}

// 9
function squareSum(numbers) {
  let sum = 0;

  for (let number of numbers) {

    const square = number * number;
    sum = sum + square;

  }

  return sum
}

// 11
function nameSplit(name) {
  return name.split(' '); // Split the name by the space and return the array
}

console.log(nameSplit("Sam Harris"));

function abbrevName(name) {
  const nameArray = nameSplit(name);

  const firstInitial = nameArray[0][0].toUpperCase();
  const secondInitial = nameArray[1][0].toUpperCase();

  return `${firstInitial}.${secondInitial}`
}

// 12
function countSheeps(sheep) {
  let count = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count++;
    }
  }

  return count
}
// 13
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}

// 14
function maps(x) {
  const doubledNumbers = [];

  for (let number of x) {
    const doubledValue = number * 2;


    doubledNumbers[doubledNumbers.length] = doubledValue;
  }
  return doubledNumbers;
}



// 15
function invert(array) {
  const inverses = [];

  for (let number of array) {
    const inverseNumbers = -number;

    inverses.push(inverseNumbers); // I understand that using the .push is an easier way to store the new values in an array when console.loging?
  }

  return inverses;
}

// 16
function sum(numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total
}

// 17
function getArraySum(arr) {
  let sum = 0; // Initialize sum to 0

  for (let num of arr) {
    sum += num;
  }
  return sum
}

function arrayPlusArray(arr1, arr2) {
  const sum1 = getArraySum(arr1);
  const sum2 = getArraySum(arr2);

  return sum1 + sum2
}

// 18
var countSheep = function(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += i + ' sheep...';
  }

  return result;
}

// 19
function getAverage(marks) {
  let sum = 0;

  for (let mark of marks) {
    sum += mark;
  }

  const average = sum / marks.length;
  return Math.floor(average); // in the discussion on the excercises I found a tip to use .floor to round the digits
}

// 20
function monkeyCount(n) {
  const monkeys = [];

  // Loop from 1 to n
  for (let i = 1; i <= n; i++) {
    monkeys.push(i);
  }

  return monkeys;
}
