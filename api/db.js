import mysql from 'mysql';

export const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'plm200510',
	database: 'crud',
});

