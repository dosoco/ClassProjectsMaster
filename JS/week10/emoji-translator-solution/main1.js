document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function () {
        // Get the input value
        const inputText = document.getElementById('translator-input').value;

        // Get the results element
        const resultsElement = document.getElementById('results');

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
});
