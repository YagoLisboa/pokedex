function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

// Método de consumo de APIs com Arrow function e métodos de manipulação de lista
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})




// Método de consumo de APIs com Arrow function e iteração convencional
// pokeApi.getPokemons().then((pokemons) => {
//     const listItems = []

//         for (let i = 0; i < pokemons.length; i++) {
//             const pokemon = pokemons[i];
//             listItems.push(convertPokemonToLi(pokemon))       
//         }
//         console.log(listItems)
//     })
    

// Método convencional
// fetch(url)
//     .then(function(response) {
//         console.log(response)
//     })
//     .catch(function(error) {
//         console.error(error)
//     })
//     .finally(function() {
//         console.log("Requisição concluída!")
//     });

console.log(10+10);
