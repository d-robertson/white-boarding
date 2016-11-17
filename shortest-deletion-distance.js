function deletion_distance(str1, str2) {
    var max;
    var temp = {};
    var tempArr = [];
    var count = 0;
    if(str1.length >= str2){
        max = str1.length;
    } else {
        maX = str2.length;
    }
    
    for(var i = 0; i < maX; i++){
      if(str1[i]){
        if(!temp[str1[i]]){
            temp[str1[i]] = 1;
        } else {
            temp[str1[i]] += 1;
        }
      }
      if(str2[i]){ 
        if(!temp[str2[i]]){
            temp[str2[i]] = 1;
        } else {
            temp[str2[i]] += 1;
        } 
      }
    }
    console.log(temp);
    for (var x in temp){
      if(temp[x]){
        if(temp[x] > 1){
            
        } else {
          tempArr.push(temp[x]);
        }
      }
    }
    console.log(tempArr.length);
    return tempArr.length;
}

deletion_distance('goat', 'boat');
deletion_distance('no', 'yes');
deletion_distance('hat', 'spat');