import {fetch} from "https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.min.js";

let pokemon = ""
let pokemon2
let pokemonName
async function doTheThing(param){
    pokemon = await fetch(param)
    pokemon2 = await pokemon.json
    pokemonName = await pokemon2["name"];
    console.log (pokemon)
    console.log (JSON.stringify(pokemon2))
    console.log (pokemonName  + ' end')
}
doTheThing('https://pokeapi.co/api/v2/pokemon/ditto')