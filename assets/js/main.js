const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById("loadMoreButton")
const limit = 12;
let offset = 0;


// Método de consumo de APIs com Arrow function e métodos de manipulação de lista
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
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
    `).join('')

    pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
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


// Função descontinuada pela simplificação do código:
// function convertPokemonToLi(pokemon){
//      return `
//          <li class="pokemon ${pokemon.type}">
//              <span class="number">#0${pokemon.order}</span>
//              <span class="name">${pokemon.name}</span>
//              <div class="detail">
//                  <ol class="types">
//                      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                  </ol>
//                  <img src="${pokemon.image}"
//                      alt="${pokemon.name}">
//              </div>
//          </li>
//      `
// }
