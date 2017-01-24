// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.


function binaryAgent(str) {
  var arr = str.split(' ');
//   console.log(arr);
  var tempArr = [];
  
  for(var i = 0; i < arr.length; i++){
//     console.log(parseInt(arr[i]));
    tempArr.push(bin2ascii(arr[i]));
  }
  
//   console.log(tempArr.join(' '));
  
//   str.charCodeAt(index);
  return tempArr.join('');
}

// binary to unicode character
function bin2ascii(bin) {
  return String.fromCharCode(parseInt(bin, 2));
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");