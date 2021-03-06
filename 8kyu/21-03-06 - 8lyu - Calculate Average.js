// Instructions:

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0

function find_average(array) {
  const arrLength = array.length
  if(arrLength > 0){
    return (array.reduce((total, amount) => total + amount)) / arrLength
  }else {
    return 0;  
  }
}