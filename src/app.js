// const request = require('supertest')
const express = require('express');
const stringsRouter = require('./routers/strings')
const numbersRouter = require('./routers/numbers')
// const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter)
app.use('/numbers', numbersRouter)

//app.post('/numbers/remainder', (req, res) => {
//  if (req.body.b == 0) {
//    res.status(400).json({ error: 'Unable to divide by 0.' })
//  } else if (req.body.a == null || req.body.b == null) {
//    res.status(400).json({ error: 'Parameters "a" and "b" are required.' })
//  } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
//    res.status(400).json({ error: 'Parameters must be valid numbers.' })
//  } else {
//    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
//  }
//});

module.exports = app;
