//importamos el Modelo
import CountryModel from "../models/CountryModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllCountries = async (req, res) => {
    try {
        const countries = await CountryModel.findAll()
        res.json(countries)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getCountry = async (req, res) => {
        try {
            const country = await CountryModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(country[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createCountry = async (req, res) => {
    try {
       await CountryModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateCountry = async (req, res) => {
    try {
        await CountryModel.update(req.body, {
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
export const deleteCountry = async (req, res) => {
    try {
        await CountryModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}