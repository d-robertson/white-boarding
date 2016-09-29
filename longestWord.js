// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  var tempArray = str.split(' ');
  var longest = 0;
  for(var i = 0; i < tempArray.length; i++){
    if(longest === 0){
      longest = tempArray[i].length;
    }
    if(tempArray[i].length > longest){
      longest = tempArray[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
