const db = require('../db');

async function validarLogin(event, email, senha) {

    const resultado = await db.query('SELECT * FROM usuarios where email = $1 and senha = $2', [email, senha])

    if (resultado.rows.length > 0) {
        return resultado.rows[0]; // Retorna o usuário encontrado
    }
    return false
}

async function cadastrarUsuario(event, nome, email, numero, senha) {
    try {
        // Busca o maior codusuario atual
        const resultado = await db.query('SELECT MAX(codusuario) FROM usuarios');
        const novoCod = (resultado.rows[0].max || 0) + 1;

        // Insere o novo usuário com perfil 'user'
        await db.query(
            'INSERT INTO usuarios (codusuario, nome, email, numero, senha, perfil) VALUES ($1, $2, $3, $4, $5, $6)',
            [novoCod, nome, email, numero, senha, 'user']
        );

        return { sucesso: true, mensagem: 'Usuário cadastrado com sucesso' };
    } catch (erro) {
        console.error('Erro ao cadastrar usuário:', erro);
        return { sucesso: false, mensagem: erro.message };
    }
}



module.exports = {
    validarLogin ,
    cadastrarUsuario  
    
}