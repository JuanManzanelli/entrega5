const express = require('express');
const productsRoutes = require('./products/products.routes');
const usersRoutes = require('./users/users.routes');

const router = express.Router();
router.use('/products', productsRoutes);
router.use ('/users', usersRoutes);

module.exports = router;
