document.addEventListener('DOMContentLoaded', function() {
    fetchTopStories();
});

function fetchTopStories() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(handleResponse)
        .then(storyIds => {
            storyIds.slice(0, 100).forEach(id => {
                fetchStoryDetails(id);
            });
        })
        .catch(error => {
            console.error('Error fetching top stories:', error);
            displayErrorMessage('Error fetching top stories. Please try again later.');
        });
}

function fetchStoryDetails(id) {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(handleResponse)
        .then(story => {
            if (story && story.url) {
                addStoryToDOM(story);
            }
        })
        .catch(error => {
            console.error(`Error fetching story details for ID ${id}:`, error);
            // Optionally, display a less intrusive error message for individual story fetch errors
        });
}

function addStoryToDOM(story) {
    const storiesContainer = document.getElementById('stories');
    const storyElement = document.createElement('div');
    storyElement.className = 'story';
    storyElement.innerHTML = `
        <a href="${story.url}" target="_blank">${story.title}</a>
        <p>${story.score} points by ${story.by} | ${story.descendants} comments</p>
    `;
    storiesContainer.appendChild(storyElement);
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function displayErrorMessage(message) {
    const storiesContainer = document.getElementById('stories');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    storiesContainer.appendChild(errorMessage);
}
