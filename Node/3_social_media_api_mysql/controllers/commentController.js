const models = require('../models/models');

class CommentController {

	async create (req, res, next) {
		const userId = req.user.id;
		!userId && res.status(401).json('Not authorize to add a comment.');

		const { comment, articleId } = req.body;
		!comment && res.json({message: 'Comment is required!'});
		!articleId && res.json({message: 'articleId is required!'});

		const articleRecord = await models.Article.findOne({ where: {id: articleId} });

		if (articleRecord.userId === userId) {
			return res.status(403).json({message: 'Forbidden. You can not add comment to your article'});
		}

		!articleRecord && res.status(404).json({message: `The article with id = ${articleId} not found`});

		const commentRecord = await models.Comment.create({ comment, userId, articleId });
		!commentRecord && res.json({message: 'Something went wrong. Comment not added.'});

		return res.json({message: 'Comment added successfully.'});
	}

	async delete (req, res, next) {
		const userId = req.user.id;
		!userId && res.status(401).json('Unauthorize to add a comment.');

		const {id} = req.params;
		const comment = await models.Comment.findOne({ where: {id} });
		!comment && res.status(404).json({message: `Comment with id = ${id} not found.`});

		if (comment.userId == userId || req.user.role === 'ADMIN') {
			await models.Comment.destroy({where: {id: id}});
			res.json({message: 'Comment has been deleted'});
		} else {
			return res.status(403).json({message: 'Forbidden. You can delete only your comment'});
		}
	}

	async update (req, res) {
		const userId = req.user.id;
		!userId && res.status(401).json('Unauthorize to update a comment.');

		const {id} = req.params;

		const { comment } = req.body;
		!comment && res.json({message: 'Comment is required!'});
		const commentRecord = await models.Comment.findOne({ where: {id} });
		!commentRecord && res.status(404).json({message: `Comment with id = ${id} not found.`});

		if (commentRecord.userId == userId || req.user.role === 'ADMIN') {
			await models.Comment.update(
				{ comment },
				{ where: {id: id} }
			);
			res.json({message: 'Comment has been updated'});
		} else {
			return res.status(403).json({message: 'Forbidden. You can update only your comment'});
		}
	}

}

module.exports = new CommentController();