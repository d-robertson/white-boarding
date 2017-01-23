// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.


function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  
  var newArr = [];
  var temp = 0;
  var counter = 1;
  var n;
  
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }
  
  do {
    temp = newArr[0] * counter * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (temp % newArr[n] !== 0) {
        break;
      }
    }

    counter++;
  } while (n !== newArr.length);

  return temp;
}

smallestCommons([1, 5]);