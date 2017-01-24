// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  var arg1 = arguments[0];
  var temp = [];
  var counter = 0;
  temp = temp.concat(arg1);
//   console.log('temp length', temp.length);
  var arg2 = arguments[1];
  
  for(var i = 0; i < temp.length; i++){
    // console.log(arr1[i]);
    if(arg2(temp[i])){
      console.log('In loop if', temp[i]);
      arg1.splice(0, i);
      break;
    } else {
      counter++;
    }
  }
  
  if(counter === temp.length){
    arg1 = [];
  }
  
  
  console.log(arg1);
  return arg1;
}

dropElements([1, 2, 3], function(n) {return n < 3; });