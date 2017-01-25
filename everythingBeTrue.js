// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// Remember, you can access object properties through either dot notation or [] notation.


function truthCheck(collection, pre) {
  // Is everyone being true?
  var bool = true;
  for(var i = 0; i < collection.length; i++){
//     console.log(collection[i][pre]);
    if(collection[i][pre]){
      console.log('true');
    } else {
      bool = false;
      break;
    }
  }
  return bool;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");