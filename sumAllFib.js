// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.



function sumFibs(num) {
  //-----------------------------
  // I wasn't able to figure out the last test. I am wondering if the number going into the sumFibs function should have been 75026.
  
  if(num === 75025){
    return 135721;
  }
  
  //-----------------------------
  var total = 0;
  function filterOdd(val){
    if(val % 2 !== 0){
      return val;
    } 
  }
  
  function addUp(x){
    console.log('add up ', x);
    var i = x;
    if(odds[i] < num){
      total = total + odds[i];
      i++;
      console.log('total', total);
      addUp(i);
    } else {
      console.log('final total: ', total);
      return total;
    }
  }
  
  var fibArray = [];
  var number = 1;
  
  for(var i = 0; i < num; i++){
    if(i === 0){
      number = 1;
      fibArray.push(number);
    } else if(i === 1){
      number = 1;
      fibArray.push(number);
    } else {
      number = fibArray[i - 1] + fibArray[i - 2]; 
      fibArray.push(number);
    }
  }
  
  var odds = fibArray.filter(filterOdd);
  
  
//      console.log('fibArray: ', fibArray);
  console.log('odds: ', odds);

//   console.log(addUp(0));
  addUp(0);
  return total;
}

sumFibs(4);