// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) { 
 var string = '';
 var mP = parseInt((num / 1000));
 var rNum = num - (mP * 1000);
 var dP = parseInt((rNum / 500));
 rNum = rNum - (dP * 500);
 var cP = parseInt((rNum / 100));
 rNum = rNum - (cP * 100);
 var lP = parseInt((rNum / 50));
 rNum = rNum - (lP * 50);
 var xP = parseInt((rNum / 10));
 rNum = rNum - (xP * 10);
 var vP = parseInt((rNum / 5));
 rNum = rNum - (vP * 5);
 var iP = parseInt((rNum / 1));
 rNum = rNum - (iP * 1);
 
 var dupLet = function(letter, times) {
   var output = '';
   for (var i=0; i<times; i++) {
     output += letter;
   }
   return output;
 };
 
  string = dupLet("M", mP) + dupLet("D", dP) + dupLet("C", cP) + dupLet("L", lP) +
    dupLet("X", xP) + dupLet("V", vP) + dupLet("I", iP);

  string = string.replace(/DC{4}/, "CM");
  string = string.replace(/C{4}/, "CD");
  string = string.replace(/LX{4}/, "XC");
  string = string.replace(/X{4}/, "XL");
  string = string.replace(/VI{4}/, "IX");
  string = string.replace(/I{4}/, "IV");
 
 return string;
}

convertToRoman(36);