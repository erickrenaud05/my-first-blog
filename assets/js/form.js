const usernameInputEl = document.getElementById('username');
const titleInputEl = document.getElementById('formTitle');
const contentInputEl = document.getElementById('formContent');
const submitButtonEl = document.getElementById('formButton');

const postsArray = [{}];

submitButtonEl.addEventListener('click', function(event){
    event.preventDefault();

    if(!usernameInputEl.value || !titleInputEl.value || !contentInputEl.value) {
        alert('please enter the entire form.');
        return;
    }

    saveBlogPost();

    usernameInputEl.value = ('');
    titleInputEl.value = ('');
    contentInputEl.value = ('');

    window.location.href = 'blog.html';
});

function saveBlogPost() {
    const username = usernameInputEl.value;
    const title = titleInputEl.value;
    const content = contentInputEl.value;

    const newPost = {
        author: username,
        title: title,
        content: content
    }

    postsArray.push(newPost);

    localStorage.setItem('posts', JSON.stringify(postsArray));
}