const baseUrl = 'https://pokeapi.co/api/v2/location-area'

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

console.log(baseUrl);

const masterBall = document.getElementById('masterball');
const locations = document.getElementById('locations');
const starterPoke = document.getElementById('starterPoke');
const canalaveCity = document.getElementById('canalave');
const oreburghMine = document.getElementById('mine');
const mtCoronet = document.getElementById('coronet');
const unnamedForest = document.getElementById('unnamed');
const wyndon = document.getElementById('wyndon');

const imageOneDiv = document.getElementById('image-one');
const imageTwoDiv = document.getElementById('image-two');

let imageOne;
let imageTwo;

// const canalPokemon = document.getElementById('pokemon2');
// const oreburghPokemon = document.getElementById('pokemon3');
// const coronetPokemon = document.getElementById('pokemon4');
// const unnamedPokemon = document.getElementById('pokemon5');
// const wyndonPokemon = document.getElementById('pokemon6');


let speciesList = document.querySelector('li')

fetchSpecies();



function fetchPokemonOne(pokemonName){
    fetch(`${pokeUrl}${pokemonName}`)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log('JSON' , json);

        imageOne = json.sprites.back_default;

        imageOneDiv.innerHTML = `<img class="image" src="${imageOne}"></img>`;
    })
}

function fetchPokemonTwo(pokemonName){
    fetch(`${pokeUrl}${pokemonName}`)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log('JSON' , json);

        imageTwo = json.sprites.back_default;

        imageTwoDiv.innerHTML = `<img class="image" src="${imageTwo}"></img>`;
    })
}



function fetchSpecies() {
    fetch(baseUrl)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
       let locations = json.results;

        for(cities of locations) {
            let cityURL = cities.url;
            fetch(cityURL)
            .then((response) => {
                return response.json();
            })
            .then(json => {
                console.log(json);
                let cityName = json.location.name;
                console.log(cityName);
                })
            // let listSpecies = document.createElement('li');
            // listSpecies.innerHTML = '<p>' + s.name + '</p>';
            // speciesList.appendChild(listSpecies);
        }

    });
}
// function dropDown() {
    //let dropDown = Wyndon;
  //  if (dropDown === canalaveCity) {
   //     console.log("You enountered Tentacool and Finneon!")
  //  } else if(dropDown === oreburghMine) {
  //      console.log("You encountered Onix and Zubat!")
  //  } else if(dropDown === mtCoronet) {
  //      console.log("You encountered Magikarp and Clefairy!")
  //  } else if(dropDown === unnamedForest) {
  //      console.log("You encountered Mew Two!")
   // } else if(dropDown === wyndon) {
   //     console.log("You found Null!")
   // } else {

   // }

    // }

    starterPoke.addEventListener('click', myFunction);
    function myFunction(){
        document.getElementById('pokemon').innerHTML = "You Received the Masterball";
        
    }

    canalaveCity.addEventListener('click', myFunction1);
    function myFunction1(){
        document.getElementById('pokemon').innerHTML = "You encountered Tentacool and Finneon!";
    
        fetchPokemonOne("tentacool");
        fetchPokemonTwo("finneon");
    
    
    }

    oreburghMine.addEventListener('click', myFunction2);
    function myFunction2(){
        document.getElementById('pokemon').innerHTML = "You encountered Onix and Zubat!";

        fetchPokemonOne("onix");
        fetchPokemonTwo("zubat");

    }

    mtCoronet.addEventListener('click', myFunction3);
    function myFunction3(){
        document.getElementById('pokemon').innerHTML = "You encountered Magikarp and Clefairy!";
        
        fetchPokemonOne("magikarp");
        fetchPokemonTwo("clefairy");
    }

    unnamedForest.addEventListener('click', myFunction4);
    function myFunction4(){
        document.getElementById('pokemon').innerHTML = "You encountered Mew Two!"

        fetchPokemonOne("mewtwo");
       
    }

    wyndon.addEventListener('click', myFunction5);
    function myFunction5(){
        document.getElementById('pokemon').innerHTML = "You found Null! Null has evolved to Silvally!";

        fetchPokemonOne("silvally");
       
    }

    