const mysql = require('mysql2/promise');
// const { get } = require('node:http');

async function getUser() {

    const connection = await mysql.createConnection({

        host : 'localhost',
        user : 'root',
        password : 'root123',
        database : 'sdet_learning'
    });
 
    const [rows] = await connection.execute(

        'select * from users where id = 1'
    );

    console.log(rows);

    await connection.end();

    return rows[0];


};

async function getUserByUsername(username){

    const connection = await mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'root123',
        database: 'sdet_learning'

    });

    const [rows] = await connection.execute(

        'select * from users where username = ?',[username]
    );

    console.log(rows);

    await connection.end();

    return rows[0];
}

module.exports = {getUser , getUserByUsername};