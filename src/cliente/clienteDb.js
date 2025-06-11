const db = require('../db');

async function BuscarClientes() {
    const resultado = await db.query('SELECT * FROM cliente ');
    return resultado.rows;
}

module.exports = {
    BuscarClientes
};