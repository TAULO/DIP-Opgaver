// random data
const url = "";
const ul = document.getElementById("users");

function createNode(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}

fetch(url)
.then(result => result.json())
.then(json => {
    const users = json.results;
    return users.map(user => {
        const li = createNode("li"),
        img = createNode("img"),
        span = createNode("span");

        img.src = user.picture.large;
        span.innerHTML = users.name.first;
        append(li, img);
        append(li, span);
        append(ul, li);  
    })
})
.catch(error => console.log(JSON.stringify(error)));

async function main() {
    try {

    } catch {

    }
}