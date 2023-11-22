const express = require('express'),
    router = express.Router(),
    userRoutes = require('./User.router'),
    catalogRoutes = require('./Catalog.router'),
    categoryRoutes = require('./Category.router')

router.use('/user', userRoutes)
router.use('/catalog', catalogRoutes)
router.use('/category', categoryRoutes)

module.exports = router

