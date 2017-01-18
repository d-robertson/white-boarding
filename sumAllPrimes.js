// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.



function sumPrimes(num) {
  var temp = [];
  
  for(var i = 1; i <= num; i++){
    var counter = 0;
    for(var j = 1; j < num; j++){
      if(i % j === 0){
//         console.log('in if');
//         console.log('i: ', i, 'j: ', j);
        counter++;
      } 
    }
    if(counter < 3){
      if(i > 1){
        temp.push(i);
      }
    }
    
  }
//   console.log(temp);
  return temp.reduce(getSum);
}

function getSum(total, num){
  return total + num;
}

sumPrimes(10);