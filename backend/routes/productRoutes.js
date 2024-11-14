const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

// Create product (Admin only)
router.post('/', verifyToken, requireRole('admin'), productController.createProduct);

// Get all products (Accessible to all)
router.get('/', productController.getAllProducts);

// Get product by ID (Accessible to all)
router.get('/:id', productController.getProductById);

// Update product (Admin only)
router.put('/:id', verifyToken, requireRole('admin'), productController.updateProduct);

// Delete product (Admin only)
router.delete('/:id', verifyToken, requireRole('admin'), productController.deleteProduct);

module.exports = router;
