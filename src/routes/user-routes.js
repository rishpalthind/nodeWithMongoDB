import express from 'express';
import { userController } from '../controllers/index.js';
import { userMiddleware } from '../middlewares/index.js';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userMiddleware.validateCreate, userController.createUser);
router.get('/:id', userController.getUser);
router.post('/:id', userMiddleware.validateUpdate, userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
