const express = require('express');
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userMiddleware.validateCreate, userController.createUser);
router.get('/:id', userController.getUser);
router.post('/:id', userMiddleware.validateUpdate, userController.updateUser);
router.delete('/:id', userController.deleteUser)

module.exports = router;