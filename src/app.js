// const request = require('supertest')
const express = require('express');
const { add, subtract } = require('./lib/numbers');
const { sayHello, uppercase, lowercase, countCharacters, firstCharacter, firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
  res.json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
  res.json({ result: firstCharacter(req.params.string)});
  }
});

app.get('/numbers/add/:number1/and/:number2', (req, res) => {
  var number1 = parseInt(req.params.number1);
  var number2 = parseInt(req.params.number2);
  
    if (isNaN(number1) || isNaN(number2)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' })
    } else {
      res.status(200).json({ result: add(number1, number2) });
    }
});

app.get('/numbers/subtract/:number1/from/:number2', (req, res) => {
  var number1 = parseInt(req.params.number1);
  var number2 = parseInt(req.params.number2);

    if (isNaN(number1) || isNaN(number2)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' })
    } else {
      res.status(200).json({ result: subtract(number2, number1) });
    }
});

module.exports = app;
