// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1)
const lastName = getInput(2)

console.log('Hello ' + firstName + ' ' + lastName)
console.log(firstName.toUpperCase() + ' ' + lastName.toUpperCase() +
            ' is your name capitalized')
console.log(firstName[0].toUpperCase() + '. ' + lastName[0].toUpperCase() + '.')
console.log(firstName[0].toLowerCase() + lastName.toLowerCase() +
            '.prsvr@gmail.com')   