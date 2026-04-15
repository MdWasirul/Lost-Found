import express from 'express';
import { createItem, getItems, getItemById } from '../controllers/itemController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getItems);           // Public: See all items
router.get('/:id', getItemById);     // Public: See one item details
router.post('/report', protect, createItem); // Protected: Must be logged in

export default router;