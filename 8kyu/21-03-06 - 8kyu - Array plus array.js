// Instructions:

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  const tot1 = arr1.reduce((total, amount) => total + amount); 
  const tot2 = arr2.reduce((total, amount) => total + amount); 
  return tot1 + tot2;
}