const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');


/* GET home page. */
router.get('/', stockController.homePage);

router.get('/fetch', stockController.fetchStockInformation)

module.exports = router;