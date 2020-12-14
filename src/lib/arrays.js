const getNthElement = (index, array) => {
  return (array[index]);
};

const arrayToCSVString = array => {
  return (array.join());
};

const csvStringToArray = string => {
  return (string.split(','));
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  var result = numbers.map(String);
  return result;
};

const uppercaseWordsInArray = strings => {
  var result = strings.map(function(x){ return x.toUpperCase(); });
  return result;
};

const reverseWordsInArray = strings => {
  for (i=0; i < strings.length; i++) {
    let splitString = strings[i].split(""); 
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    strings.splice(i, 1, joinArray);
  }
  return strings;
};

const onlyEven = numbers => {
  let evenNumbers = numbers.filter(function(x){ return x % 2 === 0});
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  let result = array;
  result.splice(index, 1);
  return result;
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  string.split("");
  for (var i = 0; i < string.length; i++) { 
    if (stringSplit[i] === (" ")) {
      string.splice(i, 1);
    }
  }
  string.join("");
  return string;
};

const sumNumbers = numbers => {
  var sum = numbers.reduce((total, amount) => total + amount);
  return sum;
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
}
