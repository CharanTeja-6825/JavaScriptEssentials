// getting profile image using axios

const userContainer = document.getElementById("container");

const inputElement = document.getElementById("input-name");

const message = document.getElementById("message");

// importing axios dynamically

document.addEventListener("DOMContentLoaded", function(){
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
    document.body.appendChild(script);
})


// adds loading text before data loads
const fetchUserData = (count) => {
    message.textContent="...loading";
    setTimeout(() => {
        message.textContent="";
    }, 1000);
    fetchUser(count);
}

async function fetchUser(count){
    try {
        const existingUser = document.querySelector(".user-profile-container");
        if(existingUser){
            userContainer.removeChild(existingUser);
        }

        const allProfiles = document.createElement("div");
        allProfiles.className="user-profile-container";

        while(count > 0){
            const response =await axios.get("https://randomuser.me/api/");
            const user = response.data.results[0];
            const userProfile = document.createElement("div");
            userProfile.className="user-individual";
            userProfile.innerHTML=`
                <p id="username">${user.name.first}</p>
                <img class="image" src=${user.picture.large} alt="profile.png">
            `;
            allProfiles.appendChild(userProfile);
            count -= 1;
        }
        userContainer.appendChild(allProfiles);


    } catch (error) {
        console.log(error);
    }
}

const handleSearch = () => {
    const userList = document.querySelectorAll(".user-individual");
    const searchTerm = inputElement.value.toLowerCase();
    // console.log(searchTerm);
    if(searchTerm === ""){
        alert("Enter username");
        inputElement.focus();
        return;
    }

    userList.forEach((user) => {
        const username = user.querySelector("#username").textContent.toLowerCase();
        if(username === searchTerm){
            user.style.display = "block";
        }else{
            user.style.display = "none";
        }
    })
}

// const renderUsers = (user) => {
//     const existingUser = document.querySelector(".user-profile-container");
//     if(existingUser){
//         userContainer.removeChild(existingUser);
//     }
//     const userDiv = document.createElement("div");
//     userDiv.innerHTML = `
//         <p>Name : ${user.name.first}</p>
//         <img class="image" src="${user.picture.large}">
//     `;
// }