// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
//
// Otherwise, return change in coin and bills, sorted in highest to lowest order.

//((Still Working through this problem))



function checkCashRegister(price, cash, cid) {
  var change;
  var register = {};
  var total = 0;


  for(var i = 0; i < cid.length; i++){
    // console.log(cid[i][0], ': ', cid[i][1]);
    register[cid[i][0]] = cid[i][1];
  }

  for (var j in register) {
    // console.log('j: ', register[j].toFixed(2));
    total = parseFloat(total).toFixed(2);
    var num = register[j].toFixed(2);
    // console.log('total: ', total, 'num: ', num);

    total = parseFloat(total) + parseFloat(num);
    console.log(total);

    // console.log(typeof(register[j]));
  }
  console.log('total: ', total.toFixed(2));




  var diff = cash - price;
  // console.log('diff: ', diff, typeof(diff));

  if(diff > parseFloat(total)){
    return "Insufficient Funds";
  }

  if(diff === parseFloat(total)){
    return "Closed";
  }

  // console.log('register: ', register);
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
