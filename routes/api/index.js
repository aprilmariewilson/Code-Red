const router = require("express").Router();
const bulkweightRoutes = require("./bulkweights");
const maintainweightRoutes = require("./maintainweights");
const loseweightRoutes = require("./loseweights");
const authRoutes = require("./auth");

router.use("/bulkweights", bulkweightRoutes);
router.use("/loseweights", loseweightRoutes);
router.use("/maintainweights", maintainweightRoutes);
router.use("/auth", authRoutes);

module.exports = router;