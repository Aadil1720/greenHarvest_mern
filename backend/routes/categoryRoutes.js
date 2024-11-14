const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

// Create a new category (admin-only)
router.post('/', verifyToken, requireRole('admin'), categoryController.createCategory);

// Get all categories (accessible to all)
router.get('/', categoryController.getAllCategories);

// Get a category by ID (accessible to all)
router.get('/:id', categoryController.getCategoryById);

// Update a category (admin-only)
router.put('/:id', verifyToken, requireRole('admin'), categoryController.updateCategory);

// Delete a category (admin-only)
router.delete('/:id', verifyToken, requireRole('admin'), categoryController.deleteCategory);

module.exports = router;
