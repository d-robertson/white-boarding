// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
// string to their corresponding HTML entities.


function convertHTML(str) {
  // &colon;&rpar;
  var split = str.split('');
  var newArray = [];
  split.forEach(function(i){
    switch (i) {
      case '&':
        newArray.push('&amp;');
        break;
      case '<':
        newArray.push('&lt;');
        break;
      case '>':
        newArray.push('&gt;');
        break;
      case '"':
        newArray.push('&quot;');
        break;
      case "'":
        newArray.push('&apos;');
        break;
      default:
        newArray.push(i);
        break; 
    }

  });
  console.log(newArray.join(''));
  return newArray.join('');
}

convertHTML("Dolce & Gabbana");