const form = document.getElementById("pokemon")

form.addEventListener("submit", async(event) => {

event.preventDefault()

const pokemonName = document.getElementById(pokemonName).value

const getPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName, {
    method: "GET",
})

const response = await getPokemon.json()

const image = document.getElementById("pokemonImage")

image.src = response.sprites.front_shiny

})