// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  var tempArray = [];
  var boolean = false;
  for(var i = 0; i < arr.length; i++){
    var temp = arr[i].toLowerCase().split('');
    tempArray.push(temp);
  }
  
  console.log(tempArray[1].sort());
  if(tempArray[0].length > tempArray[1].length){
    for(var i = 0; i < tempArray[1].length; i++){
      if(tempArray[0].indexOf(tempArray[1][i]) === -1){
        return false;
      } else {
        boolean = true;
      } 
    }
  } else {
    for(var i = 0; i < tempArray[0].length; i++){
      if(tempArray[1].indexOf(tempArray[0][i]) === -1){
        return false;
      } else {
        boolean = true;
      } 
    } 
  }
  
  return boolean;
  
}

mutation(["hello", "hey"]);