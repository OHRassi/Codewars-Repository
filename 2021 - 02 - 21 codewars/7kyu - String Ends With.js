// Instructions:  
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Pseudocode
// get length of ending
// get that many characters at end of str
// if they match, return true, otherwise false

function solution(str, ending){
  const endingLength = ending.length
  return (str.substring(str.length - endingLength)) === ending
}
