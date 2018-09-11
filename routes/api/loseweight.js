const router = require("express").Router();
const loseweightController = require("../../controllers/loseweightController");

// Matches with "/api/loseweight"
router.route("/")
	.get(loseweightController.findAll)
	.post(loseweightController.create);

// Matches with "/api/loseweight/:id"
router
	.route("/:id")
	.get(loseweightController.findById)
	.put(loseweightController.update)
	.delete(loseweightController.remove);

module.exports = router;