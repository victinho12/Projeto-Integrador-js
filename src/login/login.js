const email =document.getElementById('email')
const senha =document.getElementById('senha')
const btn_acessar =document.getElementById('acessar')
const msg = document.getElementById('msg')

btn_acessar.addEventListener('click',validarLogin)
console.log("oii")
async function validarLogin(){

const retorno = await window.api.validarLogin(email.value,senha.value)
if(retorno){
    
    msg.textContent= "deu bom";
    msg.style.color = 'blue'
}
else{
    
    msg.textContent= "deu erro";
    msg.style.color = 'red'
}

}

