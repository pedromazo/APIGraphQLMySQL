const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);
module.exports = knex

// knex('users').insert({
//     name: 'Teste',
//     email: 'test@test.com.br',
//     password: 'teste'
// }).then(data => console.log(data));


// knex('users').where({id: 1}).first().then(result => console.log(result))