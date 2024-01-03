import { db } from '../db.js';

export const getUsers = (req, res) => {
	const usuarios = 'SELECT * FROM usuarios';

	db.query(usuarios, (err, data) => {
		if (err) {
			return res.json(err);
		} else {
			return res.status(200).json(data);
		}
	});
};

export const addUser = (req, res) => {
	const usuarios = 'INSERT INTO usuarios(`nome`, `email`, `telefone`, `data_nascimento`) VALUES(?)';

	const values = [
		req.body.nome,
		req.body.email,
		req.body.telefone,
		req.body.data_nascimento,
	]

	db.query(usuarios, [values], (err) => {
		if(err) return res.json(err);

		return res.status(200).json("Usuario criado com sucesso")
	})
}

export const updateUser = (req, res) => {
	const usuarios = 'UPDATE usuarios SET `nome` = ?, `email` = ?, `telefone` = ?, `data_nascimento` = ? WHERE `id` = ?';

	const values = [
		req.body.nome,
		req.body.email,
		req.body.telefone,
		req.body.data_nascimento,
	]

	db.query(usuarios, [...values, req.params.id], (err) => {
		if(err) return res.json(err);

		return res.status(200).json("Usuario atualizado com sucesso")
	})
}

export const deleteUser = (req, res) => {
	const usuarios = 'DELETE FROM usuarios WHERE `id` = ?';

	db.query(usuarios, [req.params.id], (err) => {
		if(err) return res.json(err);

		return res.status(200).json("Usuario deletado com sucesso");
	})
}