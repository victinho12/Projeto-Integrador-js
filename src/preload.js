const { contextBridge, ipcRenderer } = require('electron');

// Funções de Cliente
function BuscarClientes() {
    return ipcRenderer.invoke('buscar-clientes');
}

// Funções de Produto
function buscarProdutos() {
    return ipcRenderer.invoke('buscar-produtos');
}

// Funções de Usuário
function buscarUsuario() {
    return ipcRenderer.invoke('buscar-usuario');
}

// Funções de Venda
function BuscarVenda() {
    return ipcRenderer.invoke('buscar-venda');
}

function deletarVenda(codvenda) {
    return ipcRenderer.invoke('deletar-venda', codvenda);
}

function atualizarVenda(codvenda, codcliente, codproduto, codusuario, status, valortotal, data) {
    return ipcRenderer.invoke('atualizar-venda', codvenda, codcliente, codproduto, codusuario, status, valortotal, data);
}

function adicionarVenda(codcliente, codproduto, codusuario, status, valortotal, data) {
    return ipcRenderer.invoke('adicionar-venda', codcliente, codproduto, codusuario, status, valortotal, data);
}

// Função para abrir janela de venda
function abrirVenda() {
    return ipcRenderer.invoke('abrir-venda');
}

function validarLogin(usuario,senha){
    return ipcRenderer.invoke('validar-login',usuario,senha)
}





// Expondo todas as funções de uma vez só (EVITA sobrescrever)
contextBridge.exposeInMainWorld('api', {
    BuscarClientes: BuscarClientes,

    buscarProdutos: buscarProdutos,

    buscarUsuario: buscarUsuario,

    BuscarVenda: BuscarVenda,
    adicionarVenda: adicionarVenda,
    atualizarVenda: atualizarVenda,
    deletarVenda: deletarVenda,
    abrirVenda: abrirVenda,

    validarLogin

});
