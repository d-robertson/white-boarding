// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  console.log(str);
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var alphaObj = {};
  var cypherObj = {};
  var string = '';
  for(var i = 0; i < alpha.length; i++){
    alphaObj[alpha[i]] = (i + 1);
  }
  
  for(var k = 0; k < alpha.length; k++){
    if(k <= 12){
      cypherObj[(k +1) + 13] = alpha[k];
    } else {
      cypherObj[(k + 1) - 13] = alpha[k];
    }
  }
//   console.log('alpha: ', alphaObj);
//   console.log('cyp: ', cypherObj);
  for(var j = 0; j < str.length; j++){
//     console.log(str[j]);
    var temp = alphaObj[str[j]];
    if(str[j] === '!' || str[j] === '.' || str[j] === '?' || str[j] === ' '){
      string += str[j];
    }
    if(!temp){
//        string += "";
    } else {
      string += cypherObj[temp];
    }
    
  }
  console.log(string);
  console.log('------------------------');
  return string;
}