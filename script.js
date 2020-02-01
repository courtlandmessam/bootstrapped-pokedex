window.addEventListener('load', ()=> {


     var btn = document.getElementById("search-pokemon");
     btn.onclick = function() { getPokemon(); }


    function getPokemon() {
      var pokemon = document.getElementById('pokemon-request').value;


      let api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

      fetch(api)
        .then(response => {

          //Checks to see if input is a valid pokemon
          if(!response.ok) {
            document.getElementById('pokemon-name').innerHTML = "Not a valid Pokemon";
          } else {
            return response.json();
          }

        })
        .then(data => {
          document.getElementById('pokemon-name').innerHTML = data.name;
          document.getElementById("pokemon-image").src = data.sprites.front_female;
          console.log(data.name);
        })
    }



});
