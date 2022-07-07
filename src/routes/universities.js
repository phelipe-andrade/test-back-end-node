const express = require('express');
const router = express.Router();
//const login = require('../middleware/login');
const universitiesControllers = require('../controllers/universitiesControllers');

// RETORNA TODOS OS PRODUTOS
router.get('/', universitiesControllers.getUniversities);
router.get('/:id', universitiesControllers.getUniversitiesById);
router.post('/', universitiesControllers.postUniversity);



module.exports = router;
