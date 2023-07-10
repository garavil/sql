const { pool } = require("../database")

const getMedia = async(req, res) =>{
    const params = [req.query.student_id]
    let sql;

    if (req.query.student_id != undefined){
        sql= "SELECT AVG(mark) FROM marks WHERE student_id = ?"
    }else{
        sql="SELECT AVG(mark) FROM marks GROUP BY student_id"
    }
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }

}

const asignaturas = async(req, res) =>{
    const params = [req.query.student_id]
    let sql;

    if (req.query.student_id != undefined){
        sql= "SELECT name, surname, title FROM students INNER JOIN subject ON (students.group_id = subject.id_subjects) WHERE student_id = ?"
    }else{
        sql= "SELECT name, surname, title FROM students INNER JOIN subject ON (students.group_id = subject.id_subjects)"
    }
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }

}
const profesores = async(req, res) =>{
    const params = [req.query.id_teacher]
    let sql;

    if (req.query.id_teacher != undefined){
        sql= "SELECT name, surname, title FROM teachers JOIN subject_teacher ON teachers.id_teachers = subject_teacher.teacher_id JOIN subject ON subject_teacher.subject_id = subject.id_subjects WHERE teachers.id_teachers = ? GROUP BY name, surname, title"
    }else{
        sql= "SELECT name, surname, title FROM teachers JOIN subject_teacher ON teachers.id_teachers = subject_teacher.teacher_id JOIN subject ON subject_teacher.subject_id = subject.id_subjects GROUP BY name, surname, title"
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }

}}





module.exports = {getMedia, asignaturas, profesores}