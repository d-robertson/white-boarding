// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  var tempArray = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i]){
      tempArray.push(arr[i]);
    }
  }
  // Don't show a false ID to this bouncer.
  return tempArray;
}

bouncer([7, "ate", "", false, 9]);