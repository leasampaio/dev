const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
	host: process.env.BD_HOST,
	port: process.env.BD_PORT,
	password: process.env.BD_PW,
	user: process.env.BD_USER,
	database: process.env.BD_NAME,
	ssl: {
		rejectUnauthorized: false,
	},
});

client
	.connect()
	.then(() => console.log('connected'))
	.catch((err) => console.error('connection error', err.stack));
module.exports = client;
