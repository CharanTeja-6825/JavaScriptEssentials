const buttons = document.querySelectorAll(".btn-color");
const reset = document.getElementById("reset");


buttons.forEach((button) => {
    button.addEventListener("click", function(){
        document.body.style.backgroundColor = button.getAttribute("data-color");
    })
})

reset.addEventListener("click", function(){
        document.body.style.backgroundColor = "white";
})