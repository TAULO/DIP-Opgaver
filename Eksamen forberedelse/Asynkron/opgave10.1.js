// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'https://jsonplaceholder.typicode.com/users';


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) throw new Error(respons.status);
    return await respons.json();
}

function get1(url) {
    return fetch(url)
    .then(respons => respons.json())
    .catch(error => {
        console.log(error)
    })
}

// get1(userUrl).then(data => console.log(data)).catch(message => console.log(message))
// get1(userUrl).then(data => console.log(data))
// get(userUrl).then(data => console.log(data[0]))


//opgave 10.2
async function users() {
    const idRow = document.getElementsByClassName("id_row")[0];
    const nameRow = document.getElementsByClassName("names_row")[0];
    const usernameRow = document.getElementsByClassName("username_row")[0];
    const mailRow = document.getElementsByClassName("mail_row")[0];
    
    const newUsers = document.getElementsByClassName("new_users")[0]
    let arr = [];

    const respons = await fetch(userUrl)
    const data = await respons.json();
    console.log(data)

    for (let i = 0; i < data.length; i++) {
        idRow.append(document.createElement("td"))
        const id = idRow.childNodes[i].innerHTML = data[i].id
        
        nameRow.append(document.createElement("td"))
        const name = nameRow.childNodes[i].innerHTML = data[i].name
        
        usernameRow.append(document.createElement("td"))
        const username = usernameRow.childNodes[i].innerHTML = data[i].username
        
        mailRow.append(document.createElement("td"))
        const mail = mailRow.childNodes[i].innerHTML = data[i].email
        
        nameRow.childNodes[i].addEventListener("click", e => {
            arr.push(
            {
                id: id,
                name: name,
                username: username,
                mail: mail   
            });   
            const td = document.createElement("td")
            newUsers.append(td) 
            td.innerHTML = id + " | " + name + " | " + username + " | " + mail
            console.log(arr)
        })
    }
}
users();

function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz")
        else if (i % 3 == 0) console.log("Fizz")
        else if (i % 5 == 0) console.log("Buzz")
        else console.log(i)
    }
} 