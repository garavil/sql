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
        //crear tabla
        // let sqlDireccion = "CREATE TABLE direccion (id INT AUTO_INCREMENT PRIMARY KEY," + "calle VARCHAR(100), " + "numero INT, " + "poblacion VARCHAR(45))";

        // let [result] = await connection.query(sqlDireccion);
        // console.log("Tabla Creada");
        // console.log(result);

        //añadir una columna a la tabla

        // let newcolumn = "ALTER TABLE `school`.`direccion` ADD COLUMN `ciudad` VARCHAR(45) NULL AFTER `poblacion`;";
        // let [result] = await connection.execute(newcolumn);
        // console.log("Columna añadida")

        //borrar columna a la tabla

        // let deletecolumn = "ALTER TABLE `school`.`direccion` DROP COLUMN `ciudad`;"
        // let [result] = await connection.execute(deletecolumn);
        // console.log("Columna eliminada")

        // Eliminar Tabla Direccion

        // let sql = "DROP TABLE direccion";
        // let [result] = await connection.query(sql);
        // console.log("Tabla eliminada");
        // console.log(result);

        //Setear todas las notas a 0

        let newmark = "UPDATE `school`.`marks` SET `mark` = '0'";
        let [result] = await connection.execute(newmark);
        console.log(result);
        
        //Nombre y primer apellido de todos los estudiantes

        // let allName = "SELECT name, surname FROM school.students;"
        // let [result] = await connection.execute(allName);
        // console.log(result);

        //Datos de los profesores

        let teachers = "SELECT * FROM school.teachers;"
        let [result2] = await connection.execute(teachers)
        console.log(result2)

        //Eliminar notas cuya fecha tenga más de 10 años

        // let notas ="DELETE FROM school.marks WHERE date < DATE_SUB(CURDATE(), INTERVAL 10 YEAR);"
        // let [result3] = await connection.execute(notas);
        // console.log(result3)
        

        //Actualizar notas
        // let updatemark = "UPDATE `school`.`marks` SET `mark` = '5' WHERE `mark` < '5'"
        // let[result4] = await connection.execute(updatemark)
        // console.log(result4)


    }
    catch(err){
        console.log(err)
        await connnection.end();
    }
}

main()



