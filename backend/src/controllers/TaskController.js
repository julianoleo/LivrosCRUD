const dbLivros = require('../database/dbLivros')
const { validationResult } = require('express-validator')

class TaskController {

    ConsultaLivros(request, response) {
        const query = 'select * from livro;'
        dbLivros.query(query, request, (err, rows) => {
            if (err) {
                console.log(err)
                response.status(500)
                response.json({ "message": "Internal Server Error "})
            } else if (rows.length > 0) {
                response.status(200)
                response.json(rows)
            }         
            else {
                response.status(404)
                response.json({ "message": "Nenhum livro encontrado" })
            }
        })
    }

    ConsultaLivrosID(request, response) {
        const id = request.params.id
        const query = 'select * from livro where id = ' + id
        dbLivros.query(query, request, (err, rows) => {
            if (err) {
                console.log(err)
                response.status(500)
                response.json({ "message": "Internal Server Error "})
            } else if (rows.length > 0) {
                response.status(200)
                response.json(rows)
            }         
            else {
                response.status(404)
                response.json({ "message": "Nenhum livro encontrado com id " + id  })
            }
        })
    }

    IncluiLivro(request, response) {
        const tarefa = {}
        tarefa.titulo = request.body.titulo
        tarefa.autor = request.body.autor
        const query = 'INSERT INTO livro (titulo, autor) VALUES (?, ?)'
        dbLivros.query(query, [tarefa.titulo, tarefa.autor], (err, rows) => {
            if (err) {                
                response.status(500)
                response.json({ "message": "Internal Server Error "})
            }         
            else {
                response.status(200)
                response.json({ "message": "Livro Incluido" })
            }
        })
    }

    AtualizaLivros(request, response) {
        const id = request.params.id
        const tarefa = {}
        tarefa.titulo = request.body.titulo
        tarefa.autor = request.body.autor
        if (typeof tarefa.titulo === "undefined" || typeof tarefa.autor === "undefined" ) {
            response.status(404)
            response.json({ "message": "Parametro incorreto"})
        }
        else {
            const query = 'UPDATE livro set titulo = ?, autor = ? WHERE id = ' + id
            dbLivros.query(query, [tarefa.titulo, tarefa.autor], (err, rows) => {
                const result = rows.message
                const resultQtd = result.substring(16, 15);
                if (resultQtd === '0') {
                    response.status(404)
                    response.json({ "message": "Livro id " + id + " não encontrado" })
                }
                else {
                    if (err) {                
                        response.status(500)
                        response.json({ "message": "Internal Server Error "})
                    }         
                    else {
                        response.status(200)
                        response.json({ "message": "Livro Alterado" })
                    }    
                }
            })    
        }
    }

    DeletaLivros(request, response) {
        const id = request.params.id
        const tipo = Number(id)
        if(isNaN(tipo)) {
            response.status(404)
            response.json({ "message": "O id não é de um tipo válido"})
        }
        else {
            const query = 'delete from livro where id = ' + id
            dbLivros.query(query, request, (err, rows) => {
                    const result = rows['affectedRows']
                    if (result === 0) {
                        response.status(404)
                        response.json({ "message": "Livro id " + id + " não encontrado" })
                    }
                    else {
                        if (err) {                
                            response.status(500)
                            response.json({ "message": "Internal Server Error "})
                        }         
                        else {
                            response.status(200)
                            response.json({ "message": "Livro Deletado" })
                        }    
                    }
            })
        }
    }
}

module.exports = new TaskController()