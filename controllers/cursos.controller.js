const Cursos = require('../models/Cursos.js')

const CursoController = {
    async cadastrarCurso(req, res){
        const { titulo, descricao, professor } = req.body
        const novoCurso = await Cursos.create({
            titulo,
            descricao,
            professor
        })
        res.status(201)
        res.json(novoCurso)
    },
    async listarCursos(req, res){
        const listarCursos = await Cursos.findAll()
        res.status(200)
        res.json(listarCursos)
    },
    async deletarCurso(req, res){
        const { id } = req.params
        await Cursos.destroy({
            where: {
                id
            }
        })
        res.json('Curso deletado')
    }
}

module.exports = CursoController