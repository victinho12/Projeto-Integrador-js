const { contextBridge, ipcRenderer } = require('electron')

function BuscarClientes() {
    return ipcRenderer.invoke('buscar-clientes');
}

function buscarProdutos() {
    return ipcRenderer.invoke('buscar-produtos');
}











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








contextBridge.exposeInMainWorld('api', {
    BuscarClientes: BuscarClientes,

    buscarProdutos: buscarProdutos,


    BuscarVenda: BuscarVenda,   
    adicionarVenda: adicionarVenda,
    atualizarVenda: atualizarVenda,
    deletarVenda: deletarVenda
});


function abrirVenda() {
    ipcRenderer.invoke('abrir-venda');
}

contextBridge.exposeInMainWorld('api',
    { abrirVenda

    }
);