// Task 1
function addStrikethrough() {
    const firstListItem = document.querySelector('#arguments li');
    firstListItem.style.textDecoration = 'line-through';
}
addStrikethrough();

// Task 2 (already done in Task 1)

// Task 3
function setImageSourceById(id, url) {
    const imageElement = document.getElementById(id);
    imageElement.src = url;
}

// Task 4
setImageSourceById("image-1", "image1.jpg");
setImageSourceById("image-2", "image2.jpg");
setImageSourceById("image-3", "image3.jpg");

// Task 5
function removeFirstListItem() {
    const firstListItem = document.querySelector('#arguments li');
    firstListItem.remove();
}
removeFirstListItem();

// Task 6
removeFirstListItem();
removeFirstListItem();

// Task 7
function adjustTextSizeById(id, fontSize) {
    const element = document.getElementById(id);
    element.style.fontSize = fontSize;
}

// Task 8
adjustTextSizeById("heading", "28px");

// Part Two - DOM Elements as Function Parameters

// Task 1
function appendElementToArguments(appendToArguments) {
    const argumentsList = document.querySelector('#arguments');
    argumentsList.appendChild(appendToArguments);
}

// Task 2
const newImage = document.createElement('img');
newImage.src = 'newImage.jpg';
appendElementToArguments(newImage);

// Task 3
function changeImageHeight(imageElement, newHeight) {
    imageElement.style.height = newHeight;
}

const imageToAdjust = document.querySelector('#image-1');
changeImageHeight(imageToAdjust, '30px');

// Task 4
function addInvisibleClass(element) {
    element.classList.add('invisible');
}

const elementToHide = document.querySelector('#lorem');
addInvisibleClass(elementToHide);

// Part Three - Creating DOM Elements

// Task 1
function createListItemWithText(text) {
    const newListItem = document.createElement('li');
    newListItem.innerText = text;
    return newListItem;
}

// Task 2
const listItem = createListItemWithText("New List Item");
appendElementToArguments(listItem);

// Task 3
function createHeaderWithText(headerSize, text) {
    const newHeader = document.createElement(`h${headerSize}`);
    newHeader.innerText = text;
    return newHeader;
}

// Task 4
const newHeaderElement = createHeaderWithText(2, "New Header Text");
appendElementToArguments(newHeaderElement);
