const blogArea = document.getElementById('blogPostArea');

const postsArray = retrieveBlogArray();

function displayBlog() {
    for (let post in postsArray) {
        createBlogPosts(postsArray[post]);
    }
}

function createBlogPosts(post) {
    const blogCard = document.createElement("div");
    const author = document.createElement("h3");
    const title = document.createElement("h2");
    const content = document.createElement("p");

    author.innerText = post.author;
    title.innerText = post.title;
    content.innerText = post.content;
    
    blogCard.classList.add('blogCard');
    author.classList.add('blogAuthor');
    title.classList.add('blogTitle');
    content.classList.add('blogContent');

    blogCard.appendChild(title);
    blogCard.appendChild(content);
    blogCard.appendChild(author);

    blogArea.appendChild(blogCard);
}

displayBlog();

const buttonEl = document.getElementById('button');
const bodyEl = document.body;
const darkModeButton = document.getElementById('dark-light');

var root = document.querySelector(':root');

buttonEl.addEventListener('click', function(event) {
    let target = event.target;
    console.log(bodyEl.state);
    if(target.id === 'dark-light') {
        if(bodyEl.getAttribute('state') === 'light') {
            root.style.setProperty('--background', 'rgba(8, 8, 8, 0.729)');
            root.style.setProperty('--textColor', 'white');
            bodyEl.setAttribute('state', 'dark');
            darkModeButton.innerText = '🌚';
        } else if(bodyEl.getAttribute('state') === 'dark') {
            root.style.setProperty('--background', 'white');
            root.style.setProperty('--textColor', 'black');
            bodyEl.setAttribute('state', 'light');
            darkModeButton.innerText = '☀️';
        }
       
    } else if(target.id === 'back') {
        window.location.href = 'index.html';
    }
})

