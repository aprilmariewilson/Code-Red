const router = require("express").Router();
const maintainweightController = require("../../controllers/maintainweightController");

// Matches with "/api/maintainweight"
router.route("/")
	.get(maintainweightController.findAll)
	.post(maintainweightController.create);

// Matches with "/api/maintainweight/:id"
router
	.route("/:id")
	.get(maintainweightController.findById)
	.put(maintainweightController.update)
	.delete(maintainweightController.remove);

module.exports = router;