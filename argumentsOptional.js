// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.


function addTogether(x, y) {
//   console.log(arguments);
  var arr = arguments;
//   console.log(arr);
  for(var i = 0; i < arr.length; i++){
    if(typeof(arr[i]) !== 'number'){
      return undefined;
    }
//     
  }
  if(arguments.length < 2){
    return function(z){
      var arr = arguments;
    //   console.log(arr);
      for(var j = 0; j < arr.length; j++){
        if(typeof(arr[j]) !== 'number'){
          return undefined;
        }
    //     
      }
//       console.log(arguments);
      return x + z;
    };
  } else {
     return x + y; 
  }
  return false;
}

addTogether(2,3);