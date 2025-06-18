// fetching pokemons using axios asyn-await
// name
// height
// weight
// image

const inputElement = document.getElementById("poke-input");

inputElement.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        fetchPokemon();
    }    
})

document.getElementById("submit").addEventListener("click", function(){
    fetchPokemon();     
});


async function fetchPokemon(){

    const inputText = inputElement.value.trim().toLowerCase();

    if(typeof inputText !== "string" || !inputText){
        throw new Error("pokemon name is messed up !");
    }

    console.log(inputText);
    
    await fetch(`https://pokeapi.co/api/v2/pokemon/${inputText}`)
               .then((response) => {
                    if(response.status != 200){
                        alert("Invalid Pokemon Name");
                        inputElement.value="";
                        inputElement.focus();
                    }else{
                        return response.json();
                    }
               })
               .then((pokemon) => {
                    renderPokemon(pokemon);
               })
               .catch((error) => {
                console.log(error);
               });
}

const renderPokemon = (pokemon) => {
    const oldPokemon = document.querySelector(".pokemon");
    if(oldPokemon){
        oldPokemon.remove();
    }

    const pokeBall = document.createElement("div");
    pokeBall.className="pokemon";

    const sounds = Object.entries(pokemon.cries).map(([key, val]) => {
        return {
            soundName:key,
            sound:val
        }
    });
    console.log(sounds);

    pokeBall.innerHTML = `
    <img src=${pokemon.sprites.front_default} alt="poke.png">
    <p>Name : ${pokemon.name}</p>
    <p>Height : ${(parseFloat(pokemon.height)*0.1)} mt</p>
    <p>Weight : ${pokemon.weight} lbs</p>
    <p>Type : ${pokemon.types[0].type.name}</p>
    `;
    // pokeBall.classList.add("poke-container");
    document.body.appendChild(pokeBall);
    pokeBall.classList.add("pokeball");

    const soundContainer = document.createElement("div");

    for (let index = 0; index < sounds.length; index++) {
        const button = document.createElement("button");
        button.textContent=sounds[index].soundName;
        
        button.addEventListener("click", function(){
            const cry = new Audio(sounds[index].sound);
            cry.play();
        })

        button.style.margin="5px";
        soundContainer.appendChild(button);
    }
    pokeBall.appendChild(soundContainer);

    inputElement.focus();
    inputElement.value="";
}