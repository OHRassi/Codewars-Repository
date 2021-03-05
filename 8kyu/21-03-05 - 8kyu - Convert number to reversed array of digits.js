// Instructions:

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  let arr1 =[];
  const newNum = n.toString()
  for(i=0;i<newNum.length;i++) {
    let theDigit = Number(newNum[i]);
    arr1.unshift(theDigit);
  }
  return arr1;
}