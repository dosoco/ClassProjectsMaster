document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('translator-input');
    const resultsElement = document.getElementById('results');

    inputElement.addEventListener('input', function () {
        // Get the input value
        const inputText = inputElement.value;

        // Determine which radio button is checked
        const selectedRadioButton = document.querySelector('input[name="translation-section"]:checked');

        // Call the appropriate translation function based on the selected radio button
        switch (selectedRadioButton.value) {
            case 'encode':
                resultsElement.innerText = encode(inputText);
                break;
            case 'translate':
                resultsElement.innerText = translate(inputText);
                break;
            case 'madlib':
                resultsElement.innerText = madlib(inputText);
                break;
            case 'search':
                // For search, clear the current content and display matching emojis
                resultsElement.innerHTML = '';
                const searchResults = search(inputText);
                if (searchResults.length > 0) {
                    searchResults.forEach(emoji => {
                        const pElement = document.createElement('p');
                        pElement.innerText = emoji.symbol;
                        resultsElement.appendChild(pElement);
                    });
                } else {
                    resultsElement.innerText = 'No matching emojis found.';
                }
                break;
            case 'random':
                // For random, select a random translation and execute that functionality
                const translations = [encode, translate, madlib, search];
                const randomTranslation = randomElement(translations);
                resultsElement.innerText = randomTranslation(inputText);
                break;
            default:
                resultsElement.innerText = 'Please select a translation option.';
                break;
        }
        
    });
    const helpToggle = document.getElementById('help-toggle');
    const helpList = document.getElementById('help-list');

    helpToggle.addEventListener('click', function (event) {
        event.preventDefault();
        // Toggle the 'invisible' class on the help list
        helpList.classList.toggle('invisible');
        // Change the visibility style of the help list based on its current state
        helpList.style.display = helpList.classList.contains('invisible') ? 'none' : 'block';
        // Change the text of the toggle link based on visibility
        helpToggle.innerHTML = helpList.classList.contains('invisible') ? 'Show Help' : 'Hide Help';
    });
    
  
});
