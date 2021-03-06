// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
  var newString;
  if(num > 3){
    if(str.length > num){
       newString = str.substring(0, num - 3);
       newString = newString + '...';
      console.log(newString);
    } else {
      newString = str;
    }
  } else {
    newString = str.substring(0, num);
    newString = newString + '...';
    console.log(newString);
  }
  
  // Clear out that junk in your trunk
  return newString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
