const express = require('express');
const router = express.Router();
//const login = require('../middleware/login');
const universitiesControllers = require('../controllers/universities-controllers');

// RETORNA TODOS OS PRODUTOS
router.get('/', universitiesControllers.getUniversities);
router.get('/:id', universitiesControllers.getUniversitiesById);

module.exports = router;
