// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  var arr = str.split('');
  var returnArr = [];
  console.log('arr: ', arr);
  for(var i = 0; i < arr.length; i++){
    var tempArr = [];
    if(arr[i] === 'A'){
      tempArr.push(arr[i], 'T');
    } else if(arr[i] === 'T'){
            tempArr.push(arr[i], 'A');
    } else if(arr[i] === 'C'){
            tempArr.push(arr[i], 'G');
    } else if(arr[i] === 'G'){
            tempArr.push(arr[i], 'C');
    }
    returnArr.push(tempArr);
  }
  return returnArr;
}

pairElement("GCG");