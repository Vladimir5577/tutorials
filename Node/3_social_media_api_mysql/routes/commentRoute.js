const router = require('express').Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, commentController.create);
router.patch('/update/:id', authMiddleware, commentController.update);
router.delete('/delete/:id', authMiddleware, commentController.delete);

module.exports = router;