var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarTimes", function (req, res) {
    usuarioController.cadastrarTimes(req, res);
})


router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/SelecoesFavoritas", function (req, res) {
    usuarioController.SelecoesFavoritas(req, res);
})

router.get("/selecaoMenosFavorita", function (req, res) {
    usuarioController.selecaoMenosFavorita(req, res);
})

router.get("/selecaoComMaisTitulos", function (req, res){
    usuarioController.selecaoComMaisTitulos(req, res);
})

module.exports = router;