
function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#0${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.image}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

// Método de consumo de APIs com Arrow function e métodos de manipulação de lista
pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
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
