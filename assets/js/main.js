const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// Método de consumo de APIs com Arrow function
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))

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
