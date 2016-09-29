// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  var temp = str.toLowerCase().split(' ');
  var newArray = [];
  
  for(var i = 0; i < temp.length; i++){
    var tempArray = temp[i].split('');
    tempArray[0] = tempArray[0].toUpperCase();
    tempArray = tempArray.join('');
    console.log(tempArray);
    newArray.push(tempArray);
  }
  
  var newString = newArray.join(' ');
  return newString;
}

titleCase("I'm a little tea pot");