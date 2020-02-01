window.addEventListener('load', ()=> {

  let api = "https://pokeapi.co/api/v2/pokemon/butterfree";

  fetch(api)
    .then(response => {
      console.log(response.json());
    })





});
