console.log("HELLO WORLDS");

const userList = document.getElementById('user-list');
const message = document.getElementById("message");

function fetchData(){
    message.textContent="Loading...";
    setTimeout(() => {
        fetchUsers();
        message.textContent="";
    },2000);
}


async function fetchUsers(){
    // fetching the data
    const response = await fetch("https://dummyjson.com/users");
    const userData = await response.json();
    const users = userData.users;
    
    users.forEach(user => {
        const userRow = document.createElement("tr");

        // Combine firstName and lastName for Name
        const name = document.createElement("td");
        name.textContent = user.firstName + " " + user.lastName;

        const age = document.createElement("td");
        age.textContent = user.age;

        const email = document.createElement("td");
        email.textContent = user.email;

        const username = document.createElement("td");
        username.textContent = user.username;

        const address = document.createElement("td");
        address.textContent = user.address.address;

        userRow.appendChild(name);
        userRow.appendChild(age);
        userRow.appendChild(email);
        userRow.appendChild(username);
        userRow.appendChild(address);

        userList.appendChild(userRow);
    });
}
