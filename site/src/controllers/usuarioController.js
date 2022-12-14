var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {
        
        usuarioModel.entrar(email)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarTimes(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro-2.html
    var selecao = req.body.selecaoServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (selecao == undefined) {
        res.status(400).send("O vetor está undefined!");
    }
    else if (idUsuario == undefined){
        res.status(400).send("O idUsuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarTimes(idUsuario,selecao)
        usuarioModel.updateTimes(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function SelecoesFavoritas(req, res) {
    usuarioModel.SelecoesFavoritas(req, res)
    .then(
        function (resultado) {
            res.json(resultado);
            console.log("\n" + resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nhouve um erro ao trazer os dados! Erro:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage)
        }
    )
}

function selecaoMenosFavorita(req,res) {
    usuarioModel.selecaoMenosFavorita(req, res)
    .then(
        function (resultado) {
            res.json(resultado);
            console.log("\n" + resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nhouve um erro ao trazer os dados! Erro:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage)
        }
    )
}

function selecaoComMaisTitulos(req, res) {
    usuarioModel.selecaoComMaisTitulos(req, res)
    .then(
        function (resultado) {
            res.json(resultado);
            console.log("\n" + resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nhouve um erro ao trazer os dados! Erro:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage)
        }
    )
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    cadastrarTimes,
    SelecoesFavoritas,
    selecaoMenosFavorita,
    selecaoComMaisTitulos
}