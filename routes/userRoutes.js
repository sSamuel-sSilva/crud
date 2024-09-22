const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/users', controller.listUsers);

router.get('/users/add', controller.showAddUserForm);

router.post('/users', controller.createUser);

router.get('/users/edit/:id', controller.showEditUserForm);

router.post('/users/edit/:id', controller.updateUser);

router.post('/users/delete/:id', controller.deleteUser);

router.get('/', (req, res) => {
    res.redirect('/users');
});

module.exports = router;