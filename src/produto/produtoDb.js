const db = require('../db');

async function buscarProdutos() {
    const resultado = await db.query('SELECT * FROM produtos ');
    return resultado.rows;
    
}

module.exports = {
 buscarProdutos
 
};