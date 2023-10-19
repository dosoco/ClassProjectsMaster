function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0
}

function halfSquare(num) {
  return num ** 2 / 2
}

function isLong(str) {
  return str.length >= 15
}

function exclaim(str) {
  return str.split('!')[0] + "!"
}

function countWords(str) {
  return str.split(' ').length
}

function containsDigit(str) {
  const validation = '0123456789'
  for(let char of str){
    if(validation.includes(char)){
      return true
    }
  }
  return false
}

function containsLowerCase(str) {
  return str.toUpperCase() !== str
}

function containsUpperCase(str) {
  return str.toLowerCase() !== str
}

function containsNonAlphanumeric(str) {
  const validator = 'abcdefghijklmnopqrstuvwxyz1234567890'
  for(let char of str){
    if(validator.includes(char.toLowerCase())){
      continue
    }else{
      return true
    }
  }
  return false
}

function containsSpace(str) {
  return str.includes(' ')
}

function digits(num) {
  let arr = num.toString()
  const result = []
  for(let char of arr){
    if(!('.-'.includes(char))){
      result.push(parseInt(char))
    }
  }
  return result
}

function truncate(str) {
  if(str.length >= 15){
    return str.slice(0, 8) + '...'
  }else{
    return str
  }
}

function isValidPassword(str) {
  return containsDigit(str) &&
          containsLowerCase(str) &&
          containsUpperCase(str) &&
          containsNonAlphanumeric(str) &&
          !containsSpace(str)
}

function onlyPunchy(arr) {
  resultArr = []
  for(let movie of arr){
    let newStr = exclaim(movie)
    if(!isLong(newStr)){
      resultArr.push(newStr)
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