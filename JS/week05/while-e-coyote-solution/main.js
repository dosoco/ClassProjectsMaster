function numberDoubler(num) {
    while(num < 100){
        num *= 2
    }
    return num
}

function stringRepeater(str) {
    let newStr = '';
    while(newStr.length < 10){
        newStr += str
        console.log(newStr)
    }
    return newStr
}

function makeDivisible(x, y) {
    while(x % y !== 0){
        x++
    }
    return x
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};