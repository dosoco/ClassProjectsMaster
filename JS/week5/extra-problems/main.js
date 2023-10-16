function isEvenlyDivisible() {

}

function halfSquare() {
}

function isLong() {
}

function exclaim() {
}

function countWords() {
}

function containsDigit(str) {
  let digits = '0123456789';
  for(let i = 0; i < str.length; i++){
    if(digits.indexOf(str[i]) !== -1){
      return true;
    }
  }
    return false
}

function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits(num) {
  num = Math.abs(num);
  let str = num.toString();
  let splitStr = str.split('');
  let result = [];
  for(let i = 0; i < splitStr.length; i++){
    if(splitStr[i] === '.'){
      continue
    }else{
      result.push(Number(splitStr[i]))
    }
  }
  return result
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy(arr) {
  //returns only those titles that are shorter than 15 characters
  //adds an exclamation point to any titles without exclamation points
  //removes any excess exclamation points from any titles with multiple exclamation points
  //does not factor in excess exclamation points when deciding if title is shorter than 15 characters
  let resultArr = [];
  for(let i = 0; i < arr.length; i++){
    let movieName = '';
    for(let char of arr[i]){
      if(char === '!'){
        continue;
      }else{
        movieName += char;
      }
    }
    if(movieName.length <= 15){
      resultArr.push(movieName + '!')
    }
  }
  return resultArr
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}