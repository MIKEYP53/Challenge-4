// all the variables for selecting elements within the page
const backButton = document.querySelector('#backButton');
const styleChange = document.querySelector('#styleChange');
const timeline = document.querySelector('#timeline');
const buttons = document.querySelectorAll('button');

// sends you back to the form page
backButton.addEventListener('click', function (event) {
    window.location.href = 'index.html';
});
// toggles the darkmode class to all elements
styleChange.addEventListener('click', function (event) {
    document.body.classList.toggle('dark-mode');
    const listItems = document.querySelectorAll('li');
    listItems.forEach(li => {
        li.classList.toggle('dark-mode');
    });
    buttons.forEach(button => {
    button.classList.toggle('dark-mode');
    });
});
// adds all the posts from the local storage into the timeline
function renderPosts() {
    // clears the timeline element
    timeline.innerHTML = '';
    // gets the posts from the localstorage
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    // for each post we add it to the timeline as an li element and filled with the post data
    storedPosts.forEach((post, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${post.title}</h3>
            <p>By: ${post.username}</p>
            <p>${post.content}</p>
        `;
        // sets a custom attribute 'data-index' to store the post's index in the array
        li.setAttribute('data-index', index);
        // appends each child into the timeline ul
        timeline.appendChild(li);
    });
}
// calls the render post function when the page is initialized
function init() {renderPosts()}
//calls the init function to run when the script loads
init();