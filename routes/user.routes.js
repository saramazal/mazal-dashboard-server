import express from "express";

// Import All Controllers:
import {
    getAllUsers,
    createUser,
    getUserInfoById
} from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoById);

export default router;