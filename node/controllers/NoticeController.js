//importamos el Modelo
import NoticeModel from "../models/NoticeModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllNoticies = async (req, res) => {
    try {
        const noticies = await NoticeModel.findAll()
        res.json(noticies)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getNotice = async (req, res) => {
        try {
            const notice = await NoticeModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(notice[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createNotice = async (req, res) => {
    try {
       await NoticeModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateNotice = async (req, res) => {
    try {
        await NoticeModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteNotice = async (req, res) => {
    try {
        await NoticeModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}