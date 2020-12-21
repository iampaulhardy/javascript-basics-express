const { add, subtract, multiply, divide, remainder } = require('../lib/numbers')

module.exports = {
  add: (req, res) => {
    var number1 = parseInt(req.params.number1);
    var number2 = parseInt(req.params.number2);
    if (isNaN(number1) || isNaN(number2)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' })
    } else {
      res.status(200).json({ result: add(number1, number2) });
    }
  },

  subtract: (req, res) => {
    var number1 = parseInt(req.params.number1);
    var number2 = parseInt(req.params.number2);
    if (isNaN(number1) || isNaN(number2)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' })
    } else {
      res.status(200).json({ result: subtract(number2, number1) });
    }
  },

  multiply: (req, res) => {
    if (req.body.a == null || req.body.b == null) {
      res.status(400).json({ error: 'Parameters "a" and "b" are required.' })
    } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
      res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' })
    } else {
      res.status(200).json({ result: multiply(req.body.a, req.body.b) });
    }
  },

  divide: (req, res) => {
    if (req.body.b == 0) {
      res.status(400).json({ error: 'Unable to divide by 0.' })
    } else if (req.body.a == null || req.body.b == null) {
      res.status(400).json({ error: 'Parameters "a" and "b" are required.' })
    } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
      res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' })
    } else {
      res.status(200).json({ result: divide(req.body.a, req.body.b) });
    }
  },

  remainder: (req, res) => {
    if (req.body.b == 0) {
      res.status(400).json({ error: 'Unable to divide by 0.' })
    } else if (req.body.a == null || req.body.b == null) {
      res.status(400).json({ error: 'Parameters "a" and "b" are required.' })
    } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' })
    } else {
      res.status(200).json({ result: remainder(req.body.a, req.body.b) });
    }
  }
}