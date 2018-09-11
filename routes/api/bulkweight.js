const router = require("express").Router();
const bulkweightController = require("../../controllers/bulkweightController");

// Matches with "/api/bulkweight"
router.route("/")
	.get(bulkweightController.findAll)
	.post(bulkweightController.create);

// Matches with "/api/bulkweight/:id"
router
	.route("/:id")
	.get(bulkweightController.findById)
	.put(bulkweightController.update)
	.delete(bulkweightController.remove);

module.exports = router;