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

        // Nota media de asignatura 1
        let media1 = "SELECT AVG(mark) AS notaMedia FROM school.marks WHERE subject_id = 1;";
        let [result] = await connection.execute(media1);
        console.log(result);

        // Total de estudiantes
        let total = "SELECT COUNT(*) AS totalStudents FROM students;";
        let[result2] = await connection.execute(total);
        console.log(result2);

        // Listar todo los campos de la tabla class
        let grupos = "SELECT * FROM school.class;";
        let[result3] = await connection.execute(grupos);
        console.log(result3);

        // Eliminar notas por encima del 5 y del año pasado
        // let nota = "DELETE * FROM school.marks WHERE mark > 5 AND YEAR(date) = 2022;";
        // let[result4] = await connection.execute(nota);
        // console.log(result4);

        // Crear un campo nuevo en la tabla students
        // let year = "ALTER TABLE `school`.`students` ADD COLUMN `year` INT NULL AFTER `group_id`;";
        // let[result5] = await connection.execute(year);
        // console.log(result5);

        //Mostrar los alumnos matriculados este año
        let alumnos = "SELECT * FROM school.students WHERE year = 2023;";
        let[result6] = await connection.execute(alumnos);
        console.log(result6);

        // Contar el número de profesores por asignatura
        let teachers = "SELECT subject_id, COUNT(teacher_id) FROM school.subject_teacher GROUP BY subject_id;";
        let[result7] = await connection.execute(teachers);
        console.log(result7);

        // Obtener ID y nota de alumnos 
        let alumnosId = "SELECT student_id, mark FROM school.marks WHERE (student_id BETWEEN 1 AND 20) OR mark > 8 AND YEAR(date)= YEAR(CURDATE()) - 1;";
        let[result8] = await connection.execute(alumnosId);
        console.log(result8);

        // Calcular nota media del año por asignatura
        let mediaAsignatura = "SELECT AVG(mark) AS nota_media FROM school.marks WHERE date BETWEEN '2022-06-01' AND '2023-06-01' GROUP BY subject_id";
        let[result9] = await connection.execute(mediaAsignatura);
        console.log(result9);

        // Calcular nota media del año por alumno
        let mediaAlumno = "SELECT AVG(mark) FROM school.marks WHERE date BETWEEN '2022-06-01' AND '2023-06-01' GROUP BY student_id";
        let[result10] = await connection.execute(mediaAlumno);
        console.log(result10);

    }
    catch(err){
        console.log(err)
        await connection.end();
    }
}



main()