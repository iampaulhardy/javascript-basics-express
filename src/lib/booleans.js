const negate = a => {
  if (a) {
    return false;
  } else {
    return true;
  }
};

const both = (a, b) => {
  if (a && b) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  if (a || b) {
    return true;
  } else {
    return false;
  }
};

const none = (a, b) => {
  if (!(a || b)) {
    return true;
  } else {
    return false;
  }
};

const one = (a, b) => {
  if (a && b) {
    return false;
  } else if (a || b) {
    return true;
  } else {
    return false;
  }
};

const truthiness = a => {
  if (a) {
    return true;
  } else
    return false;
};

const isEqual = (a, b) => {
  if (a == b) {
    return true;
  } else
    return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = a => {
  if (a % 2 == 0) {
    return false;
  } else
    return true;
};

const isEven = a => {
  if (a % 2 == 0) {
    return true;
  } else
    return false;
};

const isSquare = a => {
  let x = Math.sqrt(a)
  if (x % 1 == 0) { 
    return true;
  } else {
    return false;
  }
};

const startsWith = (char, string) => {
  if (string.charAt(0) == char) {
    return true;
  } else {
    return false;
  }
};

const containsVowels = string => {
 if (string.match(/([aeiouAEIOU])\w+/g)) {
   return true;
 } else {
   return false;
 }
 }

const isLowerCase = string => {
if (string.toLowerCase () == string) {
  return true;
} else {
  return false;
}
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
