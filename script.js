import {fetch} from "https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.min.js";

var makeRequest = "";
var activity

makeRequest = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(activity => makeRequest.name, activity => "fail")
async function getActivity() {
    await makeRequest
    console.log('You could ' + activity) 
}
getActivity()
