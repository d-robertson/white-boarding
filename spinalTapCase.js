//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var tempArray = [];
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  for(var i = 0; i < str.length; i++){
    if(i === 0){
      tempArray.push(str[i].toLowerCase());
    } else if(str[i] === ' ') {
      // console.log('space found');
      tempArray.push('-');
      tempArray.push(str[i + 1].toLowerCase());
      i += 1;
    } else if(str[i] === '_'){
//       console.log('_ found');
    } else {
      switch(str[i]){
        case str[i].toUpperCase():

          if(alpha.indexOf(str[i -1])){
            tempArray.push('-');
          }
          if(str[i] !== '-'){
            tempArray.push(str[i].toLowerCase());  
          }
          break;
        default:
          tempArray.push(str[i]);
          break;
      }
    }
  }
  
  console.log(tempArray.join(''));
    
  return tempArray.join('');
}

spinalCase('This Is Spinal Tap');