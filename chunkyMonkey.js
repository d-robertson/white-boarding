// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
 var newArray = [];
 var diff = Math.ceil(arr.length / size);
 var count = 0;
 var tempSize = size;
 if(diff < 2){
  diff = 2;
 }
 
 for(var i = 0; i < diff; i++){
  tempArray = arr.slice(count, tempSize);
  console.log(tempArray);
  newArray.push(tempArray);
  count += size;
  tempSize += size;
  console.log('count', count);
  console.log('size', size);
 }
 return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);