//===========================
// Part 1: Get random dog
//===========================

//get dog DOM elements
const dogButton = document.querySelector('#dog button')
const dogImage = document.querySelector('#dog img')

//When dog button is pressed...
dogButton.addEventListener('click', () => {
//Make an API request to get a random dog image
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
//Set the image src to the random dog image
dogImage.src = data.message
})  
})



