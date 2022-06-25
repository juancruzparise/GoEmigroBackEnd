//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const NoticeModel = db.define('noticies', {
     title: { type: DataTypes.STRING },
     content1: { type: DataTypes.STRING },
     content2: { type: DataTypes.STRING },
 })

 export default NoticeModel