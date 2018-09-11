const db = require("../models");
const stringify = require("json-stringify");

// Defining methods for the booksController
module.exports = {
	findAll: function (req, res) {
		db.Loseweight
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Loseweight
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Loseweight
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		const info = req.body;
		console.log ("You made it to the controller LoseweightS " + stringify(info, null, 2));
		db.Loseweight
			.findOneAndUpdate({ name: req.body.name }, req.body)
			// .update({$min:{LoseweightQuantity: 1}})
			// .update({$inc:{LoseweightQuantity: -1}})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Loseweight
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
