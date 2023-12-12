document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function () {
        // Get the input value
        const inputText = document.getElementById('translator-input').value;

        // Get the results element
        const resultsElement = document.getElementById('results');

        // Call the encode function and set the results
        resultsElement.innerText = encode(inputText);
    });
});

