const { pool } = require("../database")


const getAlumnos = async (req, res) =>
{
    try
    {
        let sql;
        if(req.query.student_id == null)    
            sql = "SELECT * FROM students";
        else
            sql = "SELECT * FROM students WHERE student_id =" + req.query.student_id;
        let [result] = await pool.query(sql);
        res.send(result)
    }

    catch(err)
    {
        console.log(err)
    }

}

const postAlumnos = async (req, res) => { 

    const {student_id, name, surname, group_id, year} = req.body
    const params = [student_id, name, surname, group_id, year]
    let sql = "INSERT INTO student (student_id, name, surname, group_id, year) VALUES (?, ?, ?, ?, ?)"

    try{
        const [result] = await pool.query(sql, params);
        res.send(result);
    }
    catch(err){
        res.send(err)
    }
}

async function putAlumno(req,res){
    const{student_id, name, surname,group_id,year} = req.body;
    const params = [ name? name: null, surname? surname: null, group_id? group_id: null, year? year:null,student_id];
    let sql = "UPDATE students SET name = COALESCE(?,name), surname = COALESCE(?,surname), group_id = COALESCE(?,group_id), year = COALESCE(?,year) WHERE student_id = ?;"

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }

}
const delAlumno = async (req, res) =>{

    let sql = "DELETE FROM students WHERE student_id = ?;"
    const {student_id} = req.body
    const params = [student_id]

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);

    } catch (error) {
        res.send(error)
    }


}

module.exports = { getAlumnos, postAlumnos, putAlumno, delAlumno }
