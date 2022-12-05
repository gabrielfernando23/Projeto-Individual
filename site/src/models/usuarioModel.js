var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email)
    var instrucao = `SELECT * FROM usuario WHERE email = '${email}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha,cadastrouTimes) VALUES ('${nome}', '${email}', '${senha}', 0);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarTimes(idUsuario,selecao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario, selecao);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
        var instrucao = `
            INSERT INTO torce (fkUsuario,fkselecao) VALUES ('${idUsuario}','${selecao}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucao);
    
    return database.executar(instrucao);
}


function SelecoesFavoritas() {
    console.log("Tentando fazer select e puxar dados");

    var instrucao = `SELECT selecoes.*,COUNT(fkSelecao) 'Quantidade' FROM selecoes LEFT JOIN torce ON fkSelecao = idSelecao group by selecoes.nome order by COUNT(fkSelecao) DESC LIMIT 5;`;
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function updateTimes(idUsuario){
    console.log("Entrando para fazer update na coluna de cadastro de times");

    var instrucao = `UPDATE usuario SET cadastrouTimes = 1 WHERE idUsuario = ${idUsuario};`
    console.log("executando a instrução: \n" + instrucao)
    return database.executar(instrucao)
}

function selecaoMenosFavorita(){
    console.log("Tentando fazer select e puxar dados da seleção menos favoritada");

    var instrucao = `SELECT selecoes.*,COUNT(fkSelecao) 'Quantidade'  FROM selecoes LEFT JOIN torce ON fkSelecao = idSelecao group by selecoes.nome order by COUNT(fkSelecao) ASC LIMIT 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function selecaoComMaisTitulos(){
    console.log("Tentando fazer select e puxar dados da seleção com mais titulos");

    var instrucao = `SELECT * from selecoes ORDER BY titulos DESC LIMIT 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    cadastrarTimes,
    SelecoesFavoritas,
    updateTimes,
    selecaoMenosFavorita,
    selecaoComMaisTitulos
};