const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController')

/* GET home page. */
router.get('/', userController.index);
router.get('/create', userController.create);


module.exports = router;