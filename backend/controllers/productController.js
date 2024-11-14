const Product = require('../models/Product');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// const dummyProducts = [
//     {
//         id: 1,
//         imgSrc: 'images/product-1.png',
//         name: 'Fresh Orange',
//         price: '$12.99 - $15.99',
//         numericPrice: [12.99, 15.99],
//         rating: 4.5,
//         description: 'Juicy, fresh oranges packed with Vitamin C and antioxidants. Perfect for a healthy snack.',
//         seller: 'Sunny Farms',
//         origin: 'California, USA',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '1 kg'
//     },
//     {
//         id: 2,
//         imgSrc: 'images/product-2.png',
//         name: 'Fresh Onion',
//         price: '$25.99 - $33.99',
//         numericPrice: [25.99, 33.99],
//         rating: 4.5,
//         description: 'Organic onions with a mild, sweet taste. Perfect for salads and cooking.',
//         seller: 'Green Valley Farms',
//         origin: 'Oregon, USA',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 3,
//         imgSrc: 'images/product-4.png',
//         name: 'Fresh Cabbage',
//         price: '$15.99 - $22.99',
//         numericPrice: [15.99, 22.99],
//         rating: 4.5,
//         description: 'Crunchy, fresh cabbage with a slightly sweet taste. Perfect for coleslaw and stir-fries.',
//         seller: 'Nature’s Best',
//         origin: 'Florida, USA',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '1 kg'
//     },
//     {
//         id: 4,
//         imgSrc: 'images/product-8.png',
//         name: 'Fresh Lemon',
//         price: '$14.99 - $19.99',
//         numericPrice: [14.99, 19.99],
//         rating: 4.5,
//         description: 'Fresh, zesty lemons rich in Vitamin C. Ideal for beverages and flavoring.',
//         seller: 'Citrus Grove',
//         origin: 'Mexico',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 5,
//         imgSrc: 'images/product-9.png',
//         name: 'Fresh Apple',
//         price: '$10.99 - $14.99',
//         numericPrice: [10.99, 14.99],
//         rating: 4.5,
//         description: 'Crisp and sweet apples, packed with fiber and antioxidants. Great for snacking.',
//         seller: 'Mountain Orchard',
//         origin: 'Washington, USA',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '1 kg'
//     },
//     {
//         id: 6,
//         imgSrc: 'images/product-5.png',
//         name: 'Fresh Potato',
//         price: '$22.99 - $30.99',
//         numericPrice: [22.99, 30.99],
//         rating: 4.5,
//         description: 'Starchy potatoes, perfect for baking or frying.',
//         seller: 'Rooted Farms',
//         origin: 'Idaho, USA',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '1 kg'
//     },
//     {
//         id: 7,
//         imgSrc: 'images/product-7.png',
//         name: 'Fresh Carrot',
//         price: '$20.99 - $25.99',
//         numericPrice: [20.99, 25.99],
//         rating: 4.5,
//         description: 'Crisp, sweet carrots rich in beta-carotene.',
//         seller: 'Harvest Green',
//         origin: 'Texas, USA',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 8,
//         imgSrc: 'images/product-6.png',
//         name: 'Fresh Pear',
//         price: '$13.99 - $20.99',
//         numericPrice: [13.99, 20.99],
//         rating: 4.5,
//         description: 'Juicy pears with a soft texture and sweet flavor.',
//         seller: 'Orchard Hill',
//         origin: 'Michigan, USA',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 9,
//         imgSrc: 'images/cart-img-1.png',
//         name: 'Water Melon',
//         price: '$23.99 - $27.99',
//         numericPrice: [23.99, 27.99],
//         rating: 4.5,
//         description: 'Refreshing watermelons with high water content, perfect for hydration.',
//         seller: 'Sunny Farms',
//         origin: 'Florida, USA',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '1 kg'
//     },
//     {
//         id: 10,
//         imgSrc: 'images/product-anar.jpeg',
//         name: 'Fresh Anar',
//         price: '$5.99 - $8.99',
//         numericPrice: [5.99, 8.99],
//         rating: 4.3,
//         description: 'Sweet and tangy pomegranates, rich in antioxidants.',
//         seller: 'Tropical Delights',
//         origin: 'India',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 11,
//         imgSrc: 'images/product-banana.jpeg',
//         name: 'Fresh Banana',
//         price: '$1.99 - $2.99',
//         numericPrice: [1.99, 2.99],
//         rating: 4.6,
//         description: 'Soft and sweet bananas, a good source of potassium.',
//         seller: 'Tropical Farms',
//         origin: 'Ecuador',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '1 kg'
//     },
//     {
//         id: 12,
//         imgSrc: 'images/product-brinjal.jpeg',
//         name: 'Fresh Brinjal',
//         price: '$3.49 - $4.49',
//         numericPrice: [3.49, 4.49],
//         rating: 4.2,
//         description: 'Fresh brinjals with a mild, slightly bitter taste.',
//         seller: 'Green Valley',
//         origin: 'India',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 13,
//         imgSrc: 'images/product-broccoli.jpeg',
//         name: 'Fresh Broccoli',
//         price: '$6.99 - $8.99',
//         numericPrice: [6.99, 8.99],
//         rating: 4.5,
//         description: 'Crunchy and nutritious broccoli, high in fiber and vitamins.',
//         seller: 'Nature’s Bounty',
//         origin: 'USA',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '300 g'
//     },
//     {
//         id: 14,
//         imgSrc: 'images/product-ginger.jpeg',
//         name: 'Fresh Ginger',
//         price: '$4.99 - $5.99',
//         numericPrice: [4.99, 5.99],
//         rating: 4.7,
//         description: 'Aromatic ginger, known for its zesty flavor and medicinal properties.',
//         seller: 'Herbal Farms',
//         origin: 'India',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '100 g'
//     },
//     {
//         id: 15,
//         imgSrc: 'images/product-lettuce.jpeg',
//         name: 'Fresh Lettuce',
//         price: '$2.99 - $3.99',
//         numericPrice: [2.99, 3.99],
//         rating: 4.3,
//         description: 'Crispy and fresh lettuce, perfect for salads.',
//         seller: 'Leafy Greens',
//         origin: 'Spain',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '300 g'
//     },
//     {
//         id: 16,
//         imgSrc: 'images/product-mushroom.jpeg',
//         name: 'Fresh Mushroom',
//         price: '$4.99 - $6.99',
//         numericPrice: [4.99, 6.99],
//         rating: 4.6,
//         description: 'White mushrooms, perfect for adding earthy flavor to dishes.',
//         seller: 'Fungi Farm',
//         origin: 'Poland',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '200 g'
//     },
//     {
//         id: 17,
//         imgSrc: 'images/product-peas.jpeg',
//         name: 'Fresh Green Peas',
//         price: '$3.99 - $5.99',
//         numericPrice: [3.99, 5.99],
//         rating: 4.8,
//         description: 'Sweet green peas, great for soups and side dishes.',
//         seller: 'Garden Harvest',
//         origin: 'Canada',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '250 g'
//     },
//     {
//         id: 18,
//         imgSrc: 'images/product-cucumber.jpeg',
//         name: 'Fresh Cucumber',
//         price: '$2.49 - $3.49',
//         numericPrice: [2.49, 3.49],
//         rating: 4.4,
//         description: 'Cool and crisp cucumbers, great for hydration and adding crunch to salads.',
//         seller: 'Fresh Farms',
//         origin: 'Greece',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 19,
//         imgSrc: 'images/product-strawberry.jpeg',
//         name: 'Fresh Strawberry',
//         price: '$5.99 - $8.99',
//         numericPrice: [5.99, 8.99],
//         rating: 4.7,
//         description: 'Sweet, juicy strawberries rich in vitamins and antioxidants.',
//         seller: 'Berry World',
//         origin: 'California, USA',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '250 g'
//     },
//     {
//         id: 20,
//         imgSrc: 'images/product-mango.jpeg',
//         name: 'Fresh Mango',
//         price: '$8.99 - $12.99',
//         numericPrice: [8.99, 12.99],
//         rating: 4.9,
//         description: 'Sweet and aromatic mangoes, ideal for smoothies and desserts.',
//         seller: 'Tropical Orchards',
//         origin: 'India',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '1 kg'
//     },
//     {
//         id: 21,
//         imgSrc: 'images/product-bell-pepper.jpeg',
//         name: 'Fresh Bell Pepper',
//         price: '$3.99 - $5.99',
//         numericPrice: [3.99, 5.99],
//         rating: 4.6,
//         description: 'Colorful bell peppers with a crisp texture and mild sweetness.',
//         seller: 'Green Leafy Farms',
//         origin: 'Netherlands',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 22,
//         imgSrc: 'images/product-avocado.jpeg',
//         name: 'Fresh Avocado',
//         price: '$1.99 - $2.99 each',
//         numericPrice: [1.99, 2.99],
//         rating: 4.8,
//         description: 'Creamy avocados, perfect for salads and guacamole.',
//         seller: 'Nature’s Harvest',
//         origin: 'Mexico',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '1 piece'
//     },
//     {
//         id: 23,
//         imgSrc: 'images/product-grapes.jpeg',
//         name: 'Fresh Grapes',
//         price: '$4.99 - $6.99',
//         numericPrice: [4.99, 6.99],
//         rating: 4.5,
//         description: 'Sweet and juicy grapes, great for snacking and salads.',
//         seller: 'Sunny Vineyards',
//         origin: 'Spain',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 24,
//         imgSrc: 'images/product-spinach.jpeg',
//         name: 'Fresh Spinach',
//         price: '$2.99 - $3.99',
//         numericPrice: [2.99, 3.99],
//         rating: 4.7,
//         description: 'Fresh spinach leaves packed with iron and essential nutrients.',
//         seller: 'Green Fields',
//         origin: 'USA',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '250 g'
//     },
//     {
//         id: 25,
//         imgSrc: 'images/product-blueberry.jpeg',
//         name: 'Fresh Blueberry',
//         price: '$6.99 - $9.99',
//         numericPrice: [6.99, 9.99],
//         rating: 4.9,
//         description: 'Tart and sweet blueberries, rich in antioxidants and vitamin C.',
//         seller: 'Berry Fresh',
//         origin: 'Canada',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '200 g'
//     },
//     {
//         id: 26,
//         imgSrc: 'images/product-pineapple.jpeg',
//         name: 'Fresh Pineapple',
//         price: '$3.99 - $5.99',
//         numericPrice: [3.99, 5.99],
//         rating: 4.6,
//         description: 'Juicy pineapples with a sweet, tropical flavor. Great for desserts and drinks.',
//         seller: 'Tropical Paradise',
//         origin: 'Philippines',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '1 piece'
//     },
//     {
//         id: 27,
//         imgSrc: 'images/product-pumpkin.jpeg',
//         name: 'Fresh Pumpkin',
//         price: '$5.99 - $7.99',
//         numericPrice: [5.99, 7.99],
//         rating: 4.5,
//         description: 'Nutritious pumpkins, perfect for soups and pies.',
//         seller: 'Harvest Fields',
//         origin: 'Australia',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '1 kg'
//     },
//     {
//         id: 28,
//         imgSrc: 'images/product-kiwi.jpeg',
//         name: 'Fresh Kiwi',
//         price: '$7.99 - $9.99',
//         numericPrice: [7.99, 9.99],
//         rating: 4.8,
//         description: 'Tangy kiwis rich in vitamin C and fiber. Great for smoothies and desserts.',
//         seller: 'Exotic Fruits',
//         origin: 'New Zealand',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 29,
//         imgSrc: 'images/product-sweetcorn.jpeg',
//         name: 'Fresh Sweet Corn',
//         price: '$2.99 - $3.99',
//         numericPrice: [2.99, 3.99],
//         rating: 4.6,
//         description: 'Sweet corn kernels, perfect for salads, soups, and grilling.',
//         seller: 'Cornucopia',
//         origin: 'Brazil',
//         category: 'Vegetables',
//         availability: 'In Stock',
//         weight: '500 g'
//     },
//     {
//         id: 30,
//         imgSrc: 'images/product-coconut.jpeg',
//         name: 'Fresh Coconut',
//         price: '$4.99 - $6.99',
//         numericPrice: [4.99, 6.99],
//         rating: 4.7,
//         description: 'Fresh coconut with a tropical flavor, great for cooking and hydration.',
//         seller: 'Island Groves',
//         origin: 'Sri Lanka',
//         category: 'Fruits',
//         availability: 'In Stock',
//         weight: '1 piece'
//     }
// ];


// Insert multiple products using insertMany
// const result = await Product.insertMany(dummyProducts);
// res.status(201).json({ message: 'Dummy products inserted successfully', data: result });
// } catch (error) {
// res.status(500).json({ message: error.message });
// }

