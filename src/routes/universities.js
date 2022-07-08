const express = require('express');
const router = express.Router();
const universitiesControllers = require('../controllers/universitiesControllers');

router.get('/', universitiesControllers.getUniversities);
router.get('/:id', universitiesControllers.getUniversitiesById);
router.post('/', universitiesControllers.postUniversity);
router.put('/:id', universitiesControllers.putUniversity);
router.delete('/:id', universitiesControllers.deleteUniversity);



module.exports = router;
