const profileName = document.getElementById("profile-name");
const profileImage = document.getElementById("profile-img");

async function getProfile() {
    try {
        const response = await axios.get("https://randomuser.me/api/");
        const user = response.data.results[0];
        profileName.textContent = user.name.first;
        profileImage.src = user.picture.thumbnail;
    } catch (error) {
        console.log(error);
    }
}

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
script.onload = getProfile; // Only call getProfile after axios is loaded
document.body.appendChild(script);
