import {fetch} from "https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.min.js";

const response2 = '';
function getpokemon(){
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => response.json())
.then(response => { //this displays the entire json, as a string, in the console
  const responseStringified = JSON.stringify(response); // Stringify the response
  console.log(responseStringified, '\n');
  return response; // Continue with the original response
})
.then(response => response.types[0].type.name)
.then(response => console.log(response)
)

}
getpokemon()

/* const getWeaknesses = (type) => {
    switch (type) {
        case 'Normal':
          return ['Fighting'];
        case 'Fire':
          return ['Water', 'Ground', 'Rock'];
        case 'Water':
          return ['Electric', 'Grass'];
        case 'Electric':
          return ['Ground'];
        case 'Grass':
          return ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'];
        case 'Ice':
          return ['Fire', 'Fighting', 'Rock', 'Steel'];
        case 'Fighting':
          return ['Flying', 'Psychic', 'Fairy'];
        case 'Poison':
          return ['Ground', 'Psychic'];
        case 'Ground':
          return ['Water', 'Grass', 'Ice'];
        case 'Flying':
          return ['Electric', 'Ice', 'Rock'];
        case 'Psychic':
          return ['Bug', 'Ghost', 'Dark'];
        case 'Bug':
          return ['Fire', 'Flying', 'Rock'];
        case 'Rock':
          return ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'];
        case 'Ghost':
          return ['Ghost', 'Dark'];
        case 'Dragon':
          return ['Ice', 'Dragon', 'Fairy'];
        case 'Dark':
          return ['Fighting', 'Bug', 'Fairy'];
        case 'Steel':
          return ['Fire', 'Fighting', 'Ground'];
        case 'Fairy':
          return ['Poison', 'Steel'];
        default:
          return [];
      }
    }; */