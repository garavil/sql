const mysql = require('mysql2/promise');

async function main(){
    try{
        let connection = await mysql.createConnection(
        {
            host        : "localhost",
            user        : "root",
            password    : "Admin.1234",
            database    : "school"
        });
        console.log("Conexion correcta");

        //RETO 1
        let sql ="SELECT students.name, students.surname, subject.title FROM ((students INNER JOIN subject_teacher ON students.group_id = subject_teacher.group_id) INNER JOIN subject ON subject_teacher.subject_id = subject.id_subjects) ORDER BY name DESC;"
        let [result] = await connection.execute(sql);
        console.log(result);

        //RETO 2
        let sql2 ="SELECT t.name, t.surname, su.title FROM ((teachers as t INNER JOIN subject_teacher as s ON t.id_teachers = s.teacher_id) INNER JOIN subject as su  ON s.subject_id = su.id_subjects) "
        let [result2] = await connection.execute(sql2);
        console.log(result2);

        //RETO 3 (no está bien)
        let sql3 ="SELECT t.name, t.surname, su.title FROM ((((teachers as t INNER JOIN subject_teacher as s ON t.id_teachers = s.teacher_id) INNER JOIN class ON class.id_class = s.group_id) INNER JOIN subject as su  ON s.subject_id = su.id_subjects) INNER JOIN students ON students.group_id = class.id_class);"
        let[result3] = await connection.execute(sql3);
        console.log(result3);
    }
    catch(err){
        console.log(err)
        await connection.end();
    }
}



main()