// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  var max;
  var min;
  var sum;
  var count;
  var diff;
  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);
  sum = min;
  count = min;
  diff = (max - min);
  for(var i = 0; i < diff; i++ ){
    count++;
    sum += count;
  }
  return sum;
}

sumAll([1, 4]);
