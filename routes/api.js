'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let { text, locale } = req.body;
      let translation = new Translator();
      let result = translation.translate(text, locale);
      res.json(result);
    });
};
