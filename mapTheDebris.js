// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var tempArr = [];
  for(var i = 0; i < arr.length; i++){
    var fullRadius = arr[i].avgAlt + earthRadius;
    var diameter = 3.14159265359 * (fullRadius * 2);
    var time = Math.round((3.14159265359 * 2) * Math.sqrt(Math.pow(fullRadius, 3)/ GM));
    tempArr.push({name: arr[i].name, orbitalPeriod: time});
  }
  return tempArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);