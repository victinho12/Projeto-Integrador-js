const { BrowserWindow } = require('electron')
const path = require('path')

let janelaLogin;
let janelaPrincipal;

function createMainWindow() {
    janelaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    janelaPrincipal.loadFile('./src/venda/venda.html');

    janelaPrincipal.on('closed', () => {
        janelaPrincipal = null;
    });

    return janelaPrincipal;
}


function getJanelaPrincipal() {
    return janelaPrincipal;
}

function createLoginWindon() {
    janelaLogin = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }

    })
    janelaLogin.loadFile('./src/login/login.html')
}

function getJanelaLogin(){
    return janelaLogin;

}

module.exports = {
    createMainWindow,
    getJanelaPrincipal,
    createLoginWindon
}