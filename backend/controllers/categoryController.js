const Category = require('../models/Category');

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const { name, image, description } = req.body;
        
        // Check if the category already exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        const category = new Category({ name, image, description });
        await category.save();
        
        res.status(201).json(category);  // Return the created category
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);  // Return all categories
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a category by ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);  // Return the found category
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a category
exports.updateCategory = async (req, res) => {
    try {
        const { name, image, description } = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { name, image, description },
            { new: true }
        );
        
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.json(updatedCategory);  // Return the updated category
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const dummyCategories = [
//     {
//         title: 'Vegetables',
//         imgSrc: 'images/cat-1.png',
//         discount: 'Upto 45% off',
//     },
//     {
//         title: 'Fresh Fruits',
//         imgSrc: 'images/cat-2.png',
//         discount: 'Upto 45% off',
//     },
//     {
//         title: 'Rice',
//         imgSrc: 'images/p1-removebg-preview.png',
//         discount: 'Upto 45% off',
//     },
//     {
//         title: 'Seeds',
//         imgSrc: 'images/cat-4-removebg-preview.png',
//         discount: 'Upto 45% off',
//     }
// ];
// Insert multiple products using insertMany
// const result = await Product.insertMany(dummyCategories);
// res.status(201).json({ message: 'Dummy products inserted successfully', data: result });
// } catch (error) {
// res.status(500).json({ message: error.message });
// }