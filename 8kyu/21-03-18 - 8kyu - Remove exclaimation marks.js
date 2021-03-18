// INSTRUCTIONS:

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  var noExclaim = s;
  while(noExclaim.includes("!") ){
    noExclaim = noExclaim.replace("!", "");    
  }
  return noExclaim;
}

