const express = require('express')
const CursoController = require('../controllers/cursos.controller.js')
const routes = express.Router()

routes.post('/cursos', CursoController.cadastrarCurso)
routes.get('/CURSOS', CursoController.listarCursos)
routes.delete('/cursos/:id/delete', CursoController.deletarCurso)

module.exports = routes
