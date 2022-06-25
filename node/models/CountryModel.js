//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const CountryModel = db.define('countries', {
     name: { type: DataTypes.STRING },
     continent: { type: DataTypes.STRING },
 })

 export default CountryModel