const email =document.getElementById('email')
const senha =document.getElementById('senha')
const btn_acessar =document.getElementById('acessar')
const msg = document.getElementById('msg')

btn_acessar.addEventListener('click',validarLogin)
async function validarLogin() {
    const retorno = await window.api.validarLogin(email.value.toLowerCase(), senha.value);
    console.log(retorno.perfil);
    if (retorno && retorno.perfil == 'adm') {
      localStorage.setItem('perfil', retorno.perfil)
      msg.textContent = 'deu bom'
      msg.style.color = 'green'
      await window.api.abrirJanelaPrincipal()
      console.log(retorno.perfil)
  }

  else if(retorno && retorno.perfil == 'user'){
      localStorage.setItem('perfil', retorno.perfil)
      msg.textContent = 'deu bom, user'
      await window.api.abrirJanelaPrincipal()
      console.log(retorno.perfil)
  }

}
document.getElementById('linkCadastro').addEventListener('click', () => {
    window.api.abrirCadastro();
});


    const form = document.getElementById('formCadastro');
    const msg1 = document.getElementById('mensagem');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const numero = document.getElementById('numero').value;
      const senha = document.getElementById('senha').value;

      const resposta = await window.api.cadastrarUsuario(nome, email, numero, senha);
      if (resposta.sucesso) {
        msg1.textContent = 'Usuário cadastrado com sucesso!';
        form.reset();
        msg1.style.color = 'green';
          window.api.abrirLogin();
  
      } else {
        msg1.textContent = 'Erro: ' + resposta.erro;
      }
    });
  