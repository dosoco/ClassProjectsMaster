document.addEventListener('DOMContentLoaded', function () {
    // ... (existing code)

    const helpToggle = document.getElementById('help-toggle');
    const helpList = document.getElementById('help-list');

    helpToggle.addEventListener('click', function (event) {
        event.preventDefault();
        // Toggle the 'invisible' class on the help list
        helpList.classList.toggle('invisible');
        // Change the text of the toggle link based on visibility
        helpToggle.innerHTML = helpList.classList.contains('invisible') ? 'Show Help' : 'Hide Help';

    });
});
