const { crashReporter } = require("electron");

const tabelaVenda =  document.getElementById("tabelaTableDados");
const ModalCodvenda = document.getElementById("ModalCodvenda");
const ModalCodliente = document.getElementById("ModalCodcliente");
const ModalCodproduto = document.getElementById("ModalCodproduto");
const ModalCodusuario = document.getElementById("ModalCodusuario");
const ModalStatus = document.getElementById("ModalStatus");
const ModalValorTotal = document.getElementById("ModalValorTotal");
const ModalData = document.getElementById("ModalData");

//botao
const botaoSalvarVenda = document.getElementById("btn-salvar");
const botaoExcluirVenda = document.getElementById("btn-excluir");
const botaoLimparVenda = document.getElementById("btn-limpar");

//eventos
botaoExcluirVenda.addEventListener("click", excluirVenda);
botaoSalvarVenda.addEventListener("click", salvarVenda);
botaoLimparVenda.addEventListener("click", limparVenda);



function mostrarDetalhesVenda(codvenda, codcliente, codproduto, codusuario, status, valortotal, data) {
    ModalCodvenda.textContent = codvenda;
    ModalCodliente.textContent = codcliente;
    ModalCodproduto.textContent = codproduto;
    ModalCodusuario.textContent = codusuario;
    ModalStatus.textContent = status;
    ModalValorTotal.textContent = valortotal;
    ModalData.textContent = data;
}

async function excluirVenda() {
    const codvenda = ModalCodvenda.value;
    await window.api.excluirVenda(codvenda);
    mostrarDetalhesVenda("", "", "", "", "", "", "");
carregarVendas();
}

async function atualizarVenda() {
    const codvenda = ModalCodvenda.value;
    const codcliente = ModalCodliente.value;
    const codproduto = ModalCodproduto.value;
    const codusuario = ModalCodusuario.value;
    const status = ModalStatus.value;
    const valortotal = ModalValorTotal.value;
    const data = ModalData.value;

    await window.api.atualizarVenda(codvenda, codcliente, codproduto, codusuario, status, valortotal, data);
    carregarVendas();
    
}
async function adicionarVendA() {
    const codcliente = ModalCodliente.value;
    const codproduto = ModalCodproduto.value;
    const codusuario = ModalCodusuario.value;
    const status = ModalStatus.value;
    const valortotal = ModalValorTotal.value;
    const data = ModalData.value;

    await window.api.adicionarVenda(codcliente, codproduto, codusuario, status, valortotal, data);
    carregarVendas();
    
}

   function limparVenda() {
    ModalCodvenda.value = "";
    ModalCodliente.value = "";
    ModalCodproduto.value = "";
    ModalCodusuario.value = "";
    ModalStatus.value = "";
    ModalValorTotal.value = "";
    ModalData.value = "";
}

async function carregarVendas() {
    const listaVendas = await window.api.BuscarVendas();
    tabelaVenda.innerHTML = ""; // Limpa a tabela antes de adicionar novos dados

    limparVenda.forEach(criaLinhaVenda);

    if (listaVendas.length ) {
        tabelaVenda.textContent = "Nenhuma venda encontrada.";
    }
listaCliente()
listaProduto()
listaUsuario()
}

function CriarLinhaVenda(venda){
    const linha = document.createElement("tr");
    
    const celulaCodvenda = document.createElement("td");
    celulaCodvenda.textContent = venda.codvenda;
    linha.appendChild(celulaCodvenda);

    const celulaCodcliente = document.createElement("td");
    celulaCodcliente.textContent = venda.codcliente;
    linha.appendChild(celulaCodcliente);

    const celulaCodproduto = document.createElement("td");
    celulaCodproduto.textContent = venda.codproduto;    
    linha.appendChild(celulaCodproduto);

    const celulaCodusuario = document.createElement("td");
    celulaCodusuario.textContent = venda.codusuario;    
    linha.appendChild(celulaCodusuario);

    const celulaStatus = document.createElement("td");
    celulaStatus.textContent = venda.status;
    linha.appendChild(celulaStatus);

    const celulaValorTotal = document.createElement("td");
    celulaValorTotal.textContent = venda.valortotal;
    linha.appendChild(celulaValorTotal);

    const celulaData = document.createElement("td");
    celulaData.textContent = venda.data;
    linha.appendChild(celulaData);

    const celulabotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.addEventListener("click", function() {
        mostrarDetalhesVenda(venda.codvenda, venda.codcliente, venda.codproduto, venda.codusuario, venda.status, venda.valortotal, venda.data);
    });
    botao.textContent = "Editar";
    const icone = document.createElement("i");
    icone.setAttribute("data-lucide", "edit");
    botao.appendChild(icone);
    celulabotao.appendChild(botao);
    linha.appendChild(celulabotao);

    tabelaVenda.appendChild(linha);
}

function salvarVenda() {
    const codvenda = ModalCodvenda.value;

    if (codvenda) {
        atualizarVenda();
    } else {
        adicionarVendA();
    }
}

carregarVendas();

async function listaCliente() {
    const listaClientes = await window.api.BuscarClientes();
    listaClientes.forEach(mostrarDetalhesCliente);
    console.table(listaClientes);
}

async function listaProduto() {
    const listaProdutos = await window.api.BuscarProdutos();
    listaProdutos.forEach(mostrarDetalhesProduto);
    console.table(listaProdutos);
}

async function listaUsuario() {
    const listaUsuarios = await window.api.BuscarUsuarios();
    listaUsuarios.forEach(mostrarDetalhesUsuario);
    console.table(listaUsuarios);
}

function mostrarDetalhesCliente(cliente) {
    const option = document.createElement("option");
    option.value = cliente.codcliente;
    option.textContent = cliente.nome;
    ModalCodliente.appendChild(option);
}

function mostrarDetalhesProduto(produto) {
    const option = document.createElement("option");
    option.value = produto.codproduto;
    option.textContent = produto.nome;
    ModalCodproduto.appendChild(option);
}

function mostrarDetalhesUsuario(usuario) {
    const option = document.createElement("option");
    option.value = usuario.codusuario;
    option.textContent = usuario.nome;
    ModalCodusuario.appendChild(option);
}

