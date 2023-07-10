const {Router} = require("express")
const ruta = Router();
const alumnosCtrl = require("../controller/user.controller")

ruta.get('/alumnos', alumnosCtrl.getAlumnos)
ruta.post('/alumnos', alumnosCtrl.postAlumnos)
ruta.put('/alumnos', alumnosCtrl.putAlumno)
ruta.delete('alumnos', alumnosCtrl.delAlumno)

module.exports = ruta;