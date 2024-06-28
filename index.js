let body = document.querySelector("body");

async function get20Posts(api) {
    let data = await fetch(api);
    let posts = await data.json();

    for (let i = 0; i < 20; i++){
        let post = posts[i];


        let box = document.createElement("div");
        let name = document.createElement("h2");
        let email = document.createElement("p");
        let content = document.createElement("p");

        box.classList.add("box");

        name.textContent = post.name;
        email.textContent = post.email;
        content.textContent = post.body;

        box.appendChild(name);
        box.appendChild(email);
        box.appendChild(content);

        body.appendChild(box);

    }
}

let posts = get20Posts("https://jsonplaceholder.typicode.com/comments");

console.log(posts);