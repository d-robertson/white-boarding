// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  var newStr;
  var sArray = str.split('');
  var fL = sArray[0].toLowerCase();
  if(fL === 'a' || fL === 'e' || fL === 'i' || fL === 'o' || fL === 'u' ){
    sArray.push('w', 'a', 'y');
    newStr = sArray.join('');
  } else if(checkForCluster(sArray) > 0){
    tempArray = sArray.splice(0, checkForCluster(sArray));
    sArray = sArray.concat(tempArray);
    sArray.push('a', 'y');
    newStr = sArray.join('');
  } else {
    tempArray = sArray.shift();
    sArray.push(tempArray, 'a', 'y');
    newStr = sArray.join('');
  }
  function checkForCluster(arr){
    var firstVowel = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u' ){
        firstVowel = i;
        break;
      }
    }
    return firstVowel;
  }
  
  console.log(tempArray);
  console.log(sArray);
  return newStr;
}

translatePigLatin("consonant");
