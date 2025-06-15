// getting profile image using axios

const userContainer = document.getElementById("container");

const loader = document.getElementById("loader");
loader.style.display="none";

const inputElement = document.getElementById("input-name");
inputElement.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        handleSearch();
    }
});

const searchContainer = document.querySelector(".search-container");

const message = document.getElementById("message");

// importing axios dynamically

document.addEventListener("DOMContentLoaded", function(){
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
    document.body.appendChild(script);
})


async function fetchUser(count){
    try {
        const existingUser = document.querySelector(".user-profile-container");
        if(existingUser){
            userContainer.removeChild(existingUser);
        }

        const allProfiles = document.createElement("div");
        allProfiles.className="user-profile-container";
        loader.style.display="inline"; 
        while(count > 0){
            const response =await axios.get("https://randomuser.me/api/")
                                       .then((response) => {
            const user = response.data.results[0];
            const userProfile = document.createElement("div");
            userProfile.className="user-individual";
            userProfile.innerHTML=`
                <img class="image" src=${user.picture.medium} alt="profile.png">
                <p id="username">Name : ${user.name.first}</p>
                <p id="email">Email : ${user.email}</p>
                <p>Address : ${user.location.street.number} ${user.location.street.name}</p>
                <p id="avg-age">Age : ${user.dob.age}</p>
                <p id="country">Country : ${user.location.country}</p>
                <p id="gender-count">Gender : ${user.gender}</p>
            `;
            allProfiles.appendChild(userProfile);  });
            
            count -= 1;
        }
        loader.style.display="none";
        userContainer.appendChild(allProfiles);


    } catch (error) {
        console.log(error);
    }
}

var handleSearch = () => {
    const userList = document.querySelectorAll(".user-individual");
    const searchTerm = inputElement.value.toLowerCase();
    console.log(searchTerm);
    if(searchTerm === ""){
        alert("Enter username");
        inputElement.focus();
        userList.forEach((user) => {
            user.style.display = "flex";
        })
        return;
    }

    userList.forEach((user) => {
        const username = user.querySelector("#username").textContent.toLowerCase().replace("name : ", "").trim();
        if(username === searchTerm){
            user.style.display = "flex";
        }else{
            user.style.display = "none";
        }
    })
}

const fetchUS = () => {
    const userList = document.querySelectorAll(".user-individual");
    userList.forEach((user) => {
        const username = user.querySelector("#country").textContent.toLowerCase().replace("country : ", "").trim();
        if(username === "united states"){
            user.style.display = "flex";
        }else{
            user.style.display = "none";
        }
    });
}

const clearAll = () => {
    const userList = document.querySelectorAll(".user-individual");
    userList.forEach((user) => {
        // const username = user.querySelector("#country").textContent.toLowerCase().replace("country : ", "").trim();
        user.style.display = "flex";
    });
    inputElement.value="";
    document.querySelector(".user-gender").remove();
    document.querySelector(".user-age").remove();
}

const countGenders = () => {
    const oldGender = document.querySelector(".user-gender");

    if(oldGender){
        oldGender.remove();
    }

    const genderCount= document.createElement("p");
    genderCount.className="user-gender";
    const userList = document.querySelectorAll(".user-individual");
    let m = 0, f = 0;
    userList.forEach((user) => {
        const gender = user.querySelector("#gender-count").textContent.toLowerCase().replace("gender : ", "").trim();
        if(gender === "male"){
            m++;
        }else{
            f++;
        }
    });
    genderCount.textContent=`Males : ${m}, Females : ${f}`;
    searchContainer.appendChild(genderCount);
    
}

const averageAge = () => {
    const oldAge = document.querySelector(".user-age");
    if(oldAge) oldAge.remove();

    const avg = document.createElement("div");
    const userList = document.querySelectorAll(".user-individual");
    avg.className="user-age";

    // console.log(userList.length);
    let totalAge = 0;
     userList.forEach((user) => {
        const age = user.querySelector("#avg-age").textContent.toLowerCase().replace("age : ", "").trim();
        totalAge+=parseInt(age);
    });
    let avgAge = parseFloat(totalAge / userList.length);
    avg.innerHTML = `<p> Average age : ${Math.round(avgAge)} </p>`;
    searchContainer.append(avg);
}

let theme = true;

document.querySelector(".slider").addEventListener("click", function(){
    if(theme === true){
        applyTheme("dark");
        theme = false;
    }else{
        applyTheme("light");
        theme = true;
    }
    
});

const applyTheme = (theme) => {
    if(theme === "dark"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        const buttons = document.body.querySelectorAll("#option-button");
        buttons.forEach((button) => {
            button.style.backgroundColor="white";
            button.style.color="black";
        })
        // localStorage.setItem("theme", "dark");
    }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        const buttons = document.body.querySelectorAll("#option-button");
        buttons.forEach((button) => {
            button.style.backgroundColor="black";
            button.style.color="white";
        })
    
        // localStorage.setItem("theme", "light");
    }
}
