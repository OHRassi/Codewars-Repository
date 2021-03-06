// Instructions:

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  var str = x; 
  res = []; 
  for (var i = 0, len = str.length; i < len; i += 1) { 
      (str.charAt(i) < 5) ? res.push("0") : res.push("1")
    } 
  return res.join('');
}