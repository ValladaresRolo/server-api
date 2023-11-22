const express = require('express'),
    router = express.Router(),
    {
        createCatalog,
        getCatalog,
        updateCatalog,
        deleteCatalog
    } = require('../controllers/Catalog.controller')

const auth = require('../middlewares/auth')

router.post('/', auth, createCatalog)
router.get('/', getCatalog)
router.put('/', auth, updateCatalog)
router.delete('/', auth, deleteCatalog)


module.exports = router