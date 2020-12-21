const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('../lib/strings');

module.exports = {
  sayHello: (req, res) => res.send({ result: sayHello(req.params.string) }),
  uppercase: (req, res) => res.send({ result: uppercase(req.params.string)}),
  lowercase: (req, res) => res.send({ result: lowercase(req.params.string)}),
  firstCharacters: (req, res) => {
    if (req.query.length) {
      res.json({ result: firstCharacters(req.params.string, req.query.length) });
    } else {
      res.json({ result: firstCharacter(req.params.string) });
    }
  }
}