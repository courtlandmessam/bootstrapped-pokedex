window.addEventListener('load', ()=> {


     var btn = document.getElementById("search-pokemon");
     btn.onclick = function() { getPokemon(); }


    function getPokemon() {
      var pokemon = document.getElementById('pokemon-request').value.toLowerCase();


      let api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

      fetch(api)
        .then(response => {

          //Checks to see if input is a valid pokemon
          if(!response.ok) {
            document.getElementById('pokemon-name').innerHTML = "Not a valid Pokemon";
            document.getElementById("pokemon-image").src = "";
          } else {
            return response.json();
          }

        })
        .then(data => {
          document.getElementById('pokemon-name').innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
          document.getElementById("pokemon-image").src = data.sprites.front_default;
          document.getElementById('pokemon-ability').innerHTML = `Ability: ${data.abilities[0].ability.name.charAt(0).toUpperCase() +
            data.abilities[0].ability.name.slice(1)}`;

        })
    }



});
