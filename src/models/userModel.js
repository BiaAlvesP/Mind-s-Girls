const database = require("../database/config")



// USER UP

function cadastro(nome, senha, email, cpf) {
    const sql =
        `INSERT INTO usuario(nome, senha, email, cpf)
    VALUES("${nome}", "${senha}", "${email}", "${cpf}")
    `

    return database.execute(sql);
}

// USER IN 


function login(senha, email) {
    const sql =
        `SELECT * FROM usuario
         WHERE email = "${email}" AND senha = "${senha}";
    `

    return database.execute(sql)
}


module.exports = {
    cadastro,
    login
}