// 1. Designing your layout
// Start by creating the HTML structure for your project. Add a header and a container for the stories. You can use Bootstrap for styling if you prefer. Remember to link Bootstrap in the <head> of your index.html if you decide to use it.
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your meta tags and title here -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Cyber Stories</h1>
    </header>

    <div class="container" id="stories-container">
        <!-- The stories will go here -->
    </div>

    <script src="main.js"></script>
</body>
</html>

{/* 2. Adding a single story to the DOM */
/* In your main.js, add a sample story to the DOM using document.createElement and appendChild. This is just to test the layout. */
// main.js
const body = document.querySelector('body');
const storiesContainer = document.getElementById('stories-container');

const story = document.createElement('div');
story.className = 'story';

const title = document.createElement('h2');
title.textContent = 'Sample Story Title';

const details = document.createElement('p');
details.textContent = '230 points - submitted by username - 20 comments';

story.appendChild(title);
story.appendChild(details);
storiesContainer.appendChild(story);

// 3. Reading the API's documentation
// Read through the HackerNews API documentation to answer the questions about endpoints for getting top stories and story details.

// 4. Getting the top stories' IDs
// In your main.js, use fetch to get the top stories' IDs from the Hacker News API. Log the response to ensure it's working.
// main.js
fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(topStoryIds => {
        console.log(topStoryIds);
    });

    // 5. Getting each story's details
    // Loop through the array of story IDs and make an API request for each story's details. Log the details for now.  
  // main.js
fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
.then(response => response.json())
.then(topStoryIds => {
    topStoryIds.slice(0, 5).forEach(storyId => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(response => response.json())
            .then(storyDetails => {
                console.log(storyDetails);
            });
    });
});

// 6. Adding each story to the DOM
// After retrieving each story's details, modify your code to add them to the DOM. Use the template you created earlier.
// main.js
fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(topStoryIds => {
        topStoryIds.slice(0, 5).forEach(storyId => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(response => response.json())
                .then(storyDetails => {
                    addStoryToDOM(storyDetails);
                });
        });
    });

function addStoryToDOM(storyDetails) {
    const story = document.createElement('div');
    story.className = 'story';

    const title = document.createElement('h2');
    title.textContent = storyDetails.title;

    const details = document.createElement('p');
    details.textContent = `${storyDetails.score} points - submitted by ${storyDetails.by} - ${storyDetails.descendants} comments`;

    story.appendChild(title);
    story.appendChild(details);
    storiesContainer.appendChild(story);
}
