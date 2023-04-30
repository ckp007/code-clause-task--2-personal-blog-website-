// Store the blog container and the load more button in variables
const blogContainer = document.getElementById('blog-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// Define an array of blog post data (could be fetched from an API)
const blogData = [
  {
    title: 'Blog Post Title 3',
    content: 'Morbi ac enim vestibulum, iaculis nunc eget, consectetur nunc. Etiam vitae nunc sapien. Nulla sodales porttitor felis, vel consectetur mauris laoreet eget. ',
    link: '#'
  },
  {
    title: 'Blog Post Title 4',
    content: 'Proin nec elit sapien. Fusce vitae neque at tellus rhoncus pellentesque. Duis vel lorem euismod, pretium lacus id, malesuada massa. Donec vel facilisis eros, quis pharetra ex.',
    link: '#'
  },
  {
    title: 'Blog Post Title 5',
    content: 'Sed sit amet risus at risus pellentesque imperdiet. Nunc eget justo in tortor venenatis aliquam. Sed faucibus semper tristique. Sed at velit sed quam efficitur malesuada id ac enim. Donec in felis ex. ',
    link: '#'
  },
];

// Set a variable to track the number of loaded blog posts
let loadedPosts = 2;

// Function to create and append new blog posts to the container
function addBlogPosts() {
  // Loop through the blog data array starting from the current number of loaded posts
  for (let i = loadedPosts; i < blogData.length; i++) {
    // Create a new article element
    const article = document.createElement('article');

    // Set the title and content of the article using the data from the array
    article.innerHTML = `
      <h2>${blogData[i].title}</h2>
      <p>${blogData[i].content}</p>
      <a href="${blogData[i].link}">Read More</a>
    `;

    // Append the article to the blog container
    blogContainer.appendChild(article);

    // Increment the loadedPosts variable
    loadedPosts++;

    // If we have loaded all the blog posts, hide the load more button
    if (loadedPosts === blogData.length) {
      loadMoreBtn.style.display = 'none';
      break;
    }
  }
}

// Add an event listener to the load more button
loadMoreBtn.addEventListener('click', addBlogPosts);
