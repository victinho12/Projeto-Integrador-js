

const tabelaVenda =  document.getElementById("tabelaTableDados");
const ModalCodvenda = document.getElementById("ModalCodvenda");
const ModalCodliente = document.getElementById("campoDropCliente");
const ModalCodproduto = document.getElementById("campoDropProduto");
const ModalCodusuario = document.getElementById("campoDropUsuario");
const ModalStatus = document.getElementById("ModalStatus");
const ModalValorTotal = document.getElementById("venda-valortotal");
const ModalData = document.getElementById("venda-data");

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
async function adicionarVenda() {
    const codcliente = ModalCodliente.value;
    console.log(ModalCodliente.value)
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
    const listaVendas = await window.api.BuscarVenda();
    tabelaVenda.innerHTML = ""; // Limpa a tabela

    if (listaVendas.length > 0) {
        listaVendas.forEach(CriarLinhaVenda);
    } else {
        tabelaVenda.textContent = "Nenhuma venda encontrada.";
    }

    listaCliente();
    listaProduto();
    listaUsuario();
}


function CriarLinhaVenda(venda){
    const linha = document.createElement("tr");
    
    const celulaCodvenda = document.createElement("td");
    celulaCodvenda.textContent = venda.codvenda;
    linha.appendChild(celulaCodvenda);

    const celulaCodcliente = document.createElement("td");
    celulaCodcliente.textContent = venda.nome_cliente;
    linha.appendChild(celulaCodcliente);

    const celulaCodproduto = document.createElement("td");
    celulaCodproduto.textContent = venda.nome_produto;    
    linha.appendChild(celulaCodproduto);

    const celulaCodusuario = document.createElement("td");
    celulaCodusuario.textContent = venda.nome_usuario;    
    linha.appendChild(celulaCodusuario);

    const celulaStatus = document.createElement("td");
    celulaStatus.textContent = venda.status;
    linha.appendChild(celulaStatus);

    const celulaValorTotal = document.createElement("td");
    celulaValorTotal.textContent = venda.valortotal;
    linha.appendChild(celulaValorTotal);

    const celulaData = document.createElement("td");
    celulaData.textContent = venda.data.toLocaleDateString();
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
    console.log(ModalCodliente.value)
    if (codvenda) {
        atualizarVenda();
    } else {
        adicionarVenda();
    }
}

carregarVendas();
async function listaCliente() {
    const listaClientes = await window.api.BuscarClientes();
    console.log(listaClientes)
    listaClientes.forEach(mostrarDetalhesCliente);
}

async function listaProduto() {
    const listaProdutos = await window.api.buscarProdutos();
    listaProdutos.forEach(mostrarDetalhesProduto);
}

async function listaUsuario() {
    const listaUsuarios = await window.api.buscarUsuario();

    listaUsuarios.forEach(mostrarDetalhesUsuario);
}


function mostrarDetalhesCliente(cliente) {
    const option = document.createElement("option");
    option.value = cliente.codcliente;
       console.log(option.value)
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
    console.log(usuario)
    option.value = usuario.codusuario;
    option.textContent =  usuario.nome;
    ModalCodusuario.appendChild(option);
}


