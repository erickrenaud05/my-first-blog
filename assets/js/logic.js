function retrieveBlogArray() {
    let postsArray = JSON.parse(localStorage.getItem('posts'));

    if(!postsArray) {
        postsArray = [];
    }
    return postsArray;
}