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
    //delete button 
    const delButton = document.createElement("button");

    author.innerText = post.author;
    title.innerText = post.title;
    content.innerText = post.content;
     //delete button 
     delButton.innerText = 'Delete';
    
    blogCard.classList.add('blogCard');
    author.classList.add('blogAuthor');
    title.classList.add('blogTitle');
    content.classList.add('blogContent');
    //delete button
    delButton.setAttribute('type', 'button');
    delButton.setAttribute('id', 'delButton');

    blogCard.appendChild(title);
    blogCard.appendChild(content);
    blogCard.appendChild(author);
     //delete button 
    author.appendChild(delButton);

    blogCard.addEventListener('click', function(event) {
        if (event.target.id === 'delButton') {
            const delBlogTitle = this.firstChild.innerText;
            let x = 0;
            for (let post of postsArray) {
                if(post.title === delBlogTitle) {
                    postsArray.splice(x, 1);
                    localStorage.setItem('posts', JSON.stringify(postsArray));
                    blogArea.innerHTML = '';
                    displayBlog();
                }
                x++;
            }
        }
    });
    
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

