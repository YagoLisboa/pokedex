const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// Método de consumo de APIs
fetch(url).then(function(response) {
    console.log(response)
});

console.log(10+10);
