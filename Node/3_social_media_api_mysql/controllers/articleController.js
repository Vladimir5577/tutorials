const models = require('../models/models');

class ArticleController {

	async getAll (req, res, next) {
		const articles = await models.Article.findAll(
			{ include: models.User }

		);
		return res.json(articles);
	}

	async getById (req, res, next) {
		const {id} = req.params;
		const article = await models.Article.findOne({
			where: {id},
			include: [models.User, models.Comment],
		});
		!article && res.status(404).json({message: `The article with id = ${id} not found`});

		res.json(article);
	}

	async create (req, res) {
		const userId = req.user.id;
		!userId && res.status(401).json('Not authorize to create an article.');

		const { title, description } = req.body;
		!title && res.json('Title is required!');
		!description && res.json('Description is required!');
		
		const article = await models.Article.create({ title, description, userId });

		return res.json(article);
	}

	async update (req, res) {
		const {id} = req.params;
		const article = await models.Article.findOne({where: {id}});
		!article && res.status(404).json({message: `The article with id = ${id} not found`});

		if (article.userId === req.user.id || req.user.role === 'ADMIN') {
			const { title, description } = req.body;
			!title && res.json('Title is required!');
			!description && res.json('Description is required!');
			await models.Article.update(
				{ title, description },
				{ where: {id: id} }
			);
			res.json({ message: 'The article has been updated.'});
		} else {
			res.status(403).json({message: 'You can update only your article.'});
		}
	}

	async delete (req, res) {
		const {id} = req.params;
		const article = await models.Article.findOne({where: {id}});
		!article && res.status(404).json({message: `The article with id = ${id} not found`});

		if (article.userId === req.user.id || req.user.role === 'ADMIN') {
			await models.Article.destroy({where: {id: id}});
			res.json({ message: 'The article has been deleted.'});
		} else {
			res.status(403).json({message: 'You can delete only your article.'});
		}
	}

}

module.exports = new ArticleController();