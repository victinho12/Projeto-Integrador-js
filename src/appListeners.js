const { contextBridge, ipcRenderer, ipcMain } = require('electron');


const {
    BuscarClientes,
} = require('./cliente/clienteDb');
const {
    atualizarVenda,
    BuscarVenda,
    deletarVenda,
    adicionarVenda
} = require('./venda/vendaDb');

const {
    buscarProdutos
} = require('./produto/produtoDb');





function registrarProdutoHandler() {
    ipcMain.handle('buscar-produtos', buscarProdutos);
}

function registrarClienteHandler() {
    ipcMain.handle('buscar-clientes', BuscarClientes);
}

function registrarVendaHandler() {
    ipcMain.handle('buscar-venda',BuscarVenda);
    ipcMain.handle('deletar-venda', deletarVenda);
    ipcMain.handle('atualizar-venda', atualizarVenda);
    ipcMain.handle('adicionar-venda', adicionarVenda);
}

function registrarTodos() {
    registrarClienteHandler();
    registrarVendaHandler();
    registrarProdutoHandler();
}

module.exports = {
    registrarTodos
};