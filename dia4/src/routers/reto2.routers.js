const {Router} = require("express")
const ruta = Router();
const alumnos2 = require("../controller/reto2.controller")

ruta.get("/media", alumnos2.getMedia)
ruta.get("/apuntadas", alumnos2.asignaturas)
ruta.get("/impartidas", alumnos2.profesores)


module.exports = ruta;