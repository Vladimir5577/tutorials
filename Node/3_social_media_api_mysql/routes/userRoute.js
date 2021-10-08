const router = require('express').Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/get_users', userController.getUsers);
router.get('/test', userController.test);
router.get('/user_info', authMiddleware, userController.userInfo);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/check', userController.check);


module.exports = router;