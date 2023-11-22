const express = require('express'),
    router = express.Router(),
    {
        signUp,
        login,
        getUsers,
        updateUser,
        deleteUser,

    } = require('../controllers/User.controller'),
    auth = require('../middlewares/auth')

router.post('/signup', signUp)
router.post('/login', login)
// metodo de llamado, llamar a autentificación como parametro, despues el controlador
router.get('/', auth, getUsers)
router.put('/', auth, updateUser)
router.delete('/', auth, deleteUser)



module.exports = router