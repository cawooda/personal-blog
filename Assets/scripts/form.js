
const BLOG_LIST = 'blogList';
//App Action


const submitButton = document.getElementById('submitBlogPost');

//Event Handlers
function submitBlogPostHandler(event) {
    event.preventDefault();
    const userNameInput = document.getElementById('username');
    const blogTitleInput = document.getElementById('blog-title');
    const blogContentInput = document.getElementById('blog-content');
    let blogList = JSON.parse(localStorage.getItem(BLOG_LIST));
    if (!blogList) blogList = [];
    console.log(blogList);
    
    let blogPost = {}; 
        if (!(blogPost.userName = userNameInput.value)) {
            alert("Please enter a username")
            return;
        };
        blogPost.date = Date.now();
        
        if (!(blogPost.title = capitalise(blogTitleInput.value)
    )){
        alert("Please enter a title for your post")
        return;
    };
        if (!(blogPost.content = blogContentInput.value)) {
        alert("Please enter some content for your blog")
        return;
    };
    

        blogList.push(blogPost);

    console.log(blogList);
    localStorage.setItem(BLOG_LIST,JSON.stringify(blogList));
    
    console.log("end post Handler");
    window.location.href = "./posts.html";
    

}

function capitalise(input) {
    words = input.split();
    console.log(words);
    output = "";
    for (word of words){
        const firstLetter = word.charAt(0).toUpperCase();
        const remainingLetters = word.slice(1);
        const capitalisedWord = firstLetter + remainingLetters
        output = `${output}${capitalisedWord} `;
    }
    return output;
}

//EVENT LISTENERS
submitButton.addEventListener('click',submitBlogPostHandler);