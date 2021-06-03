const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

//Rotas Válidas
router.get('/api/livro', TaskController.ConsultaLivros)
router.get('/api/livro/:id', TaskController.ConsultaLivrosID)
router.put('/api/livro', TaskController.IncluiLivro)
router.post('/api/livro/:id', TaskController.AtualizaLivros)
router.delete('/api/livro/:id', TaskController.DeletaLivros)

module.exports = router