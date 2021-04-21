const db = require("../models");
if (process.env.NODE_ENV != 'production') { const dotenv = require('dotenv/config') };

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Restaurant
      .find(req.query)
      .then(dbModel => {
        console.log("in the controller")
        res.json(dbModel)
      }
      )
      .catch(err => res.status(422).json(err));
  },
  findBySlug: function (req, res) {
    db.Restaurant
      .findOne({ slug: req.params.slug })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
