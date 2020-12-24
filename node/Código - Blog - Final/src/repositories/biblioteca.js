const bd = require('../utils/database');

const criarBiblioteca = async () => {
	const query = `CREATE TABLE IF NOT EXISTS  biblioteca (
		id INT,
		titulo TEXT,
		autor TEXT,
		deletado BOOL
	)`;
	return bd.query(query);
};
module.exports = { criarBiblioteca };
