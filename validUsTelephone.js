// Return true if the passed string is a valid US phone number.

// The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.



function telephoneCheck(str) {
  // Good luck!
  var nonInt = /^[(]?\s?\d/;
  var paren = /[()]/;
  var reg1 = /\d?[-]?\s?[(]?\d{3}[)]?[-]?\s?\d{3}\s?[-]?\d{4}/;
  
  if(!nonInt.test(str)){
    return false;
  }
  
  var first = /^[1]/;
//   console.log(first.test(str), str);
  
  if(first.test(str)){
//     var regWithParen = /\d?[-]?\s?[(]\d{3}[)][-]?\s?[-]?\d{4}/;
    var regWithParen1 = /[1]\s?[(]\d{3}[)][-]?\s?\d{3}[-]?\s?\d{4}/;
//     console.log(paren.test(str), str);
    if(paren.test(str)){
//       console.log(regWithParen1.test(str), str);
      return regWithParen1.test(str);
    }
//     console.log(reg1.test(str), str);
    return reg1.test(str);
  } else {
    console.log(paren.test(str), str);
    if(paren.test(str)){
      var regNo1Paren = /^[(]\d{3}[)][-]?\s?\d{3}[-]?\s?\d{4}$/;
      return regNo1Paren.test(str);
    } else {
      var regNoParenNo1 = /^\d{3}[-]?\s?\d{3}[-]?\s?\d{4}$/;
      return regNoParenNo1.test(str);
    }
  }
//   console.log(reg1.test(str), 'str: ', str);
  return reg1.test(str);
}



telephoneCheck("555-555-5555");