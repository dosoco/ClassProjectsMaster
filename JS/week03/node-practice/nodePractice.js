// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1)
const lastName = getInput(2)

console.log("Hello " + firstName + " " + lastName)

console.log("Hello, " + firstName.toUpperCase() + " " + lastName.toUpperCase() + " This is your name in all CAPS!")

console.log("these are your initials " + firstName[0].toUpperCase() + "." + lastName[0].toUpperCase() + ".")

console.log("You can email me at " + firstName[0].toLowerCase() + lastName.toLowerCase() + ".prsvr@gmail.com")