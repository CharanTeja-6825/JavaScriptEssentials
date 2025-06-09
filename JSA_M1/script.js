// // check for theme key in local storage
// if(!localStorage.getItem("theme")){
//     localStorage.setItem("theme", "light");
// }

// function applyTheme(){
//     const theme = localStorage.getItem("theme");
//     document.body.className=theme;
// }

// applyTheme();

// function changeTheme(newTheme){
//     localStorage.setItem("theme", newTheme);
//     applyTheme();
// }


// lets try this with pure javascript

if(!localStorage.getItem("theme")){
    localStorage.setItem("theme", "light");
}

document.body.style.fontFamily="sans-serif";

function applyTheme(){
    const theme = localStorage.getItem("theme");
    if(theme === "dark"){
        localStorage.setItem("theme", "dark");
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
}

function changeTheme(newTheme){
    localStorage.setItem("theme", newTheme);
    applyTheme();
}