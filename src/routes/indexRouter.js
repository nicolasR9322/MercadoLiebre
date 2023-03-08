const express = require("express");
const app = express();
const router = express.Router();
const controller = require("../controllers/indexController")

// index
router.get("/", controller.index);

module.exports = router;