const express = require('express');

const router = express.Router();

const { add, subtract, multiply, divide, remainder } = require('../controllers/numbers');

router.get('/add/:number1/and/:number2', add);

router.get('/subtract/:number1/from/:number2', subtract);

router.post('/multiply', multiply);

router.post('/divide', divide);

router.post('/remainder', remainder);

module.exports = router;