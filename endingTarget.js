// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var strArray = str.split(' ');
  var newStr = strArray.join('');
  console.log(str.substring(str.length - target.length));
  var test = str.substring(str.length - target.length);
//   console.log(strArray[strArray.length-1]);
//   var targetArray = target.split('');
//   if(strArray[strArray.length - 1] === target){
//     return true;
//   } else if(newStr[newStr.length-1] === target) {
//     return true;
//   } else {
//     return false;
//   }
  if(test === target){
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");