/******************
 * YOUR CODE HERE *
 ******************/

function xify(str){
  let output = "";
  while(output.length < str.length){
    output += "x";
  }
  return output;
}

function yellingChars(str){
  let output = "";
  for (let i = 0; i < str.length; i++){
    output = output + str[i] + "!";
  }
  return output;
}

function indexedChars(str){
  let output = "";
  for (let i = 0; i < str.length; i++){
    output += i + str[i];
  }
  return output;
}

function numberedChars(str){
  let output = "";
  for (let i = 0; i < str.length; i++){
    output += "(" + (i + 1) + ")" + str[i];
  }
  return output;
}

function exclaim(str){
  let output = "";
  for (let i = 0; i < str.length; i ++){
    if (str[i] === "?" || str[i] === "."){
      output += "!";
    }else{
      output += str[i];
    }
  }
  return output;
}

function repeatIt(str, num){
  let repeated = 0;
  let output = "";
  while(repeated < num){
    output += str;
    repeated ++;
  }
  return output;
}

function truncate(str){
    let output = "";
    if (str.length <= 18){
      return str;
    }
    for (let i = 0; i < 15; i ++){
      output += str[i];
    }
    output += "...";
    return output;
  }

function ciEmailify(str){
  let output = "";
  for (let i = 0; i < str.length; i++){
    if (str[i] === " "){
      output += ".";
    }else{
      output += str[i].toLowerCase();
    }
  }
  return output + "@perseverenow.org";
}

function reverse(str){
  let output = "";
  for (let i = str.length-1; i >= 0; i--){
    output += str[i];
  }
  return output;
}

function onlyVowels(str){
  let output = "";
  for (let i = 0; i < str.length; i++){
    if (str[i] == "a" || str[i] == "e" ||
    str[i] == "i" || str[i] == "o" || str[i] == "u" || 
    str[i] == "A" || str[i] == "E" ||
    str[i] == "I" || str[i] == "O" || str[i] == "U"){
      output += str[i];
    }
  }
  return output;
}

function crazyCase(str){
  let output = "";
  for (let i = 0; i < str.length; i++){
    if(i % 2 === 0){
      output += str[i].toLowerCase();
    }else{
      output += str[i].toUpperCase();
    }
  }
  return output;
}

function titleCase(str){
  let output = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++){
    if (str[i - 1] === " "){
      output += str[i].toUpperCase();
    }else{
      output += str[i].toLowerCase();
    }
  }
  return output;
}

function camelCase(str){
  let output = str[0].toLowerCase();
  for (let i = 1; i < str.length; i++){
    if (str[i - 1] === " "){
      output += str[i].toUpperCase();
    }else if (str[i] === " "){
      continue;
    }else{
      output += str[i].toLowerCase();
    }
  }
  return output;
}

function crazyCase2ReturnOfCrazyCase(str){
  let output = "";
  let letter = 0;
  for (let i = 0; i < str.length; i++){
    if(str[i] === " "){
      output += str[i];
    }else if(letter % 2 === 0){
      output += str[i].toLowerCase();
      letter++;
    }else{
      output += str[i].toUpperCase();
      letter++;
    }
  }
  return output;
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
