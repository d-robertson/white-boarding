// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.


function reverseString(str) {
  var newStr = str.split('').reverse().join('');
  return newStr;
}

reverseString("hello");