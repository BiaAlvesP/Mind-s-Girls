 const userModel = require("../models/userModel")


// SIGN UP

function cadastro(req, res) {
    
    const nome = req.body.nome;
    const senha = req.body.senha;
    const email = req.body.email;
    const cpf = req.body.cpf;


    if (!nome || !senha || !email || !cpf) {
        return res.status(400).json({ "msg:": "erro ao cadastrar" })
    } else {
        userModel.cadastro(nome, senha, email, cpf)
            .then((response) => {
                return res.status(201).json({ "msg": "Usuário criado!", response })
            })
            .catch((error) => {
                return res.status(400).json({ "Erro": error })
            })
    }

}

// SIGN IN 

function login(req, res) {

    const email = req.body.email;
    const senha = req.body.senha;

    console.log(req.body)

    console.log(req.body.email)
    console.log(req.body.senha)

    if (!email || !senha) {
        return res.status(400).json({ "msg:": "erro ao cadastrar" })
    } else {
        userModel.login(email, senha)
            .then(response => {

                if (response[0] == undefined) {
                    return res.status(204).json({ "msg": "Usuário ou Senha estão incorretos!" })
                } else {
                    return res.status(200).json({ "msg": "Usuário autenticado", response })
                }

            })
            .catch((error) => { return res.status(400).json({ "msg": "error ao autenticar: " + error }) })
    }


}

module.exports = {
    cadastro,
    login
}