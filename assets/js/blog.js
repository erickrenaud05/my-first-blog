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