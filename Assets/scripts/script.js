//Theme Switching-->
const Theme = { LIGHT:'light', DARK: 'dark'};
const HTML_ELEMENT = document.documentElement;
const STORAGE_KEY = 'theme';
const cachedTheme = localStorage.getItem(STORAGE_KEY);
const themeToggle = document.getElementById('theme-toggle');
const MOON = "🌔"
const SUN = "🌻"
//checkes if a cached theme was found. if not it defaults to light

//App Action
const BLOG_LIST = 'blogList';

const submitButton = document.getElementById('submitBlogPost');





function getCachedTheme() {
if (cachedTheme) {
    if (cachedTheme === Theme.DARK) {
            HTML_ELEMENT.classList.add(Theme.DARK);
            themeToggle.textContent = MOON;
        } else {
            HTML_ELEMENT.classList.add(Theme.DARK);
            themeToggle.textContent = SUN;
        }
} else {
    HTML_ELEMENT.classList.add(Theme.LIGHT);//defailts to light
    themeToggle.textContent = SUN;
}
}

function getPosts() {
    const postsSection = document.getElementById('posts-section');
    
    const blogList = JSON.parse(localStorage.getItem(BLOG_LIST));
    
    
    
    if (blogList) {
        let index = 0;
        for (const post of blogList) {

            console.log(post);
            let date = new Date(parseInt(post.date));
            console.log(date);
            

            let postElement = document.createElement('article');
            postElement.setAttribute('id',`post-${index}`);

            let title = document.createElement('h3');
            title.textContent = post.title;
            postElement.appendChild(title);
            
            const dateEl = document.createElement('p');
            dateEl.className = 'blog-date';
            console.log(dateEl);
            dateEl.textContent = `Date: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` ;
            postElement.appendChild(dateEl);

            let userName = document.createElement('p');
            userName.className = 'user-name';
            userName.textContent = `User: ${post.userName}`;
            postElement.appendChild(userName);
            

            let content = document.createElement('p');
            content.textContent = post.content;
            postElement.appendChild(content);
            
            postsSection.appendChild(postElement);

            index++;
        }


        postsSection.appendChild
    } else return;
}

//Switches the theme
function switchTheme() {
    if (HTML_ELEMENT.classList.contains(Theme.LIGHT)) {
        console.log("classlist contains Theme.LIGHT");
        console.log(`HTML Classlist Before: ${HTML_ELEMENT.classList}`);
        HTML_ELEMENT.classList.replace(Theme.LIGHT,Theme.DARK);
        localStorage.setItem(STORAGE_KEY,Theme.DARK);
        themeToggle.textContent = MOON;
        console.log(`HTML Classlist AFTER: ${HTML_ELEMENT.classList}`);
        console.log(`cached theme ${cachedTheme}`);
    } else {
        console.log(`HTML Classlist Before: ${HTML_ELEMENT.classList}`);
        HTML_ELEMENT.classList.replace(Theme.DARK,Theme.LIGHT);
        localStorage.setItem(STORAGE_KEY,Theme.LIGHT);
        themeToggle.textContent = SUN;
        console.log(`HTML Classlist AFTER: ${HTML_ELEMENT.classList}`);
        console.log(`cached theme ${cachedTheme}`);
    }
}

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
        
        if (!(blogPost.title = blogTitleInput.value)){
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
    
    
    window.location.href = "./posts.html";
    

}

//Startup
getCachedTheme();
document.addEventListener("DOMContentLoaded", (event) => {
    getPosts();
  });


//EVENT LISTENERS
submitButton.addEventListener('click',submitBlogPostHandler);
themeToggle.addEventListener('click',switchTheme);

