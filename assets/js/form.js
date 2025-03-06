// all the variables for selecting elements within the page
const submit = document.querySelector('#submit');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

// submits all the form data and stores it to the local storage
submit.addEventListener('click', function (event) {
    event.preventDefault();
    //validation checking whether all fields have been inputed
    if (usernameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
        alert('Please enter in all the fields.');
    } else {
        // create an object with the form inputs
        const post = {
            username: usernameInput.value.trim(),
            title: titleInput.value.trim(),
            content: contentInput.value.trim(),
        };
        // retrieve existing posts or create an empty array
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        // add the new post to the array
        storedPosts.push(post);
        // store the updated array
        localStorage.setItem('posts', JSON.stringify(storedPosts));
        // clear the form inputs
        usernameInput.value = '';
        titleInput.value = '';
        contentInput.value = '';
        // go to the blog page
        window.location.href = 'blog.html';
    }
});