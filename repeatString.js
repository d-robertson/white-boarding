// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  var temp = str;
  if(num > 0){
    for(var i = 1; i < num; i++){
      temp = temp + str;
    }
    // repeat after me
    console.log(temp);
    return temp;
  } else {
    return '';
  }
  
}

repeatStringNumTimes("abc", 3);