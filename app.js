document.addEventListener("DOMContentLoaded", function () {
    const postList = document.getElementById("post-list");

    // Fetch posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            // Render posts on the page
            posts.forEach(post => {
                const listItem = document.createElement("li");
                listItem.classList.add("post-item");

                const title = document.createElement("span");
                title.classList.add("post-title");
                title.textContent = post.title;

                // Open the post in a new tab when clicked
                title.addEventListener("click", () => {
                    window.open(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
                });

                listItem.appendChild(title);
                postList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});