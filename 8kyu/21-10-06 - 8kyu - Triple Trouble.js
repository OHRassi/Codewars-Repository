function tripleTrouble(strOne,strTwo,strThree){
  let combinedStr = ''
  for (let i = 0; i < strOne.length; i++){
    combinedStr += strOne[i] + strTwo[i] + strThree[i]
  }
  return combinedStr
}
