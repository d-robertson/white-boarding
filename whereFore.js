// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var boolean = false;
//   console.log('source: ', source);
  // Only change code below this line
  for(var i = 0; i < collection.length; i++){
    for(key in source){
//       console.log('val: ', collection[i][key]);
      if(collection[i][key] === source[key]){
        boolean = true;
      } else {
        boolean = false;
      }
    }
    if(boolean === true){
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  console.log('arr', arr);
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });