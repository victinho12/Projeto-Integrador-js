const db = require('../db');

async function BuscarVenda() {
    const resultado = await db.query('SELECT * FROM vendas ORDER BY codvenda DESC');
    return resultado.rows;
    
}

async function deletarVenda(event, codvenda) {
    event.preventDefault();
    await db.query('DELETE FROM vendas WHERE codvenda = $1', [codvenda]);
    return resultado.rows;
}

async function atualizarVenda(event, codvenda, codcliente, codproduto, codusuario, status, valortotal, data) {
    console.log("Atualizando venda:", codvenda, codcliente, codproduto, codusuario, status, valortotal, data);
    await db.query(
        'UPDATE vendas SET codcliente = $7, codproduto = $2, codusuario = $3, status = $4, valortotal = $5, data = $6 WHERE codvenda = $1',
        [codcliente, codproduto, codusuario, status, valortotal, data, codvenda]
    );
    return resultado.rows;
}

async function adicionarVenda(event, codcliente, codproduto, codusuario, status, valortotal, data) {
    console.log("Adicionando venda:", codcliente, codproduto, codusuario, status, valortotal, data);
    await db.query(
        'INSERT INTO vendas (codcliente, codproduto, codusuario, status, valortotal, data) VALUES ($1, $2, $3, $4, $5, $6)',
        [codcliente, codproduto, codusuario, status, valortotal, data]
    );
    return resultado.rows;
}

module.exports = {
    BuscarVenda,
    deletarVenda,
    atualizarVenda,
    adicionarVenda
};