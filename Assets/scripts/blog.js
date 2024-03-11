
const BLOG_LIST = 'blogList';

function getPosts() {    
    const postsSection = document.getElementById('posts-section');
    const blogList = JSON.parse(localStorage.getItem(BLOG_LIST));

    blogList.sort(function(a,b){return new Date(b.date) - new Date(a.date);});

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


//Startup

document.addEventListener("DOMContentLoaded", (event) => {
    getPosts();
  });



