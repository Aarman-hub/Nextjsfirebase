const express = require('express');
const { getCurrentUser } = require('../controllers/auth');

const router = express.Router();


router.get('/currentUser', getCurrentUser);


module.exports = router;