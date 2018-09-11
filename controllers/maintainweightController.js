const db = require("../models");
const stringify = require("json-stringify");

// Defining methods for the booksController
module.exports = {
	findAll: function (req, res) {
		db.Maintainweight
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Maintainweight
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Maintainweight
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		const info = req.body;
		console.log ("You made it to the controller MaintainweightS " + stringify(info, null, 2));
		db.Maintainweight
			.findOneAndUpdate({ name: req.body.name }, req.body)
			// .update({$min:{MaintainweightQuantity: 1}})
			// .update({$inc:{MaintainweightQuantity: -1}})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Maintainweight
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
