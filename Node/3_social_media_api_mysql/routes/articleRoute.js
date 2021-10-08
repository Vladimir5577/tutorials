const router = require('express').Router();
const articleController = require('../controllers/articleController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/get_articles', articleController.getAll);
router.get('/article/:id', articleController.getById);

// auth routes
router.post('/create', authMiddleware, articleController.create);
router.patch('/update/:id', authMiddleware, articleController.update);
router.delete('/delete/:id', authMiddleware, articleController.delete);

module.exports = router;