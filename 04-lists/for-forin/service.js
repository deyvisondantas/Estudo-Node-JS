const axios = require('axios')
const URL = `http://swapi.dev/api/people`

async function obterPessoas (nome){ // obter pesoas pelo nome4
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url) // o axios é uma promise
    return response.data
}

// obterPessoas('r2')
//     .then(function (resultado) {
//         console.log('resultado', resultado)
//     })
//     .catch(function (error){
//         console.error('DEU RUIM', error)
//     })

module.exports = {
    obterPessoas
}