const express = require(`express`);
const router = express.Router();

// Connect the routes regarding the HTML pages
const htmlRoutes = require(`./htmlController`);
router.use(htmlRoutes);

// Connect the routes regarding the api
const apiRoutes = require(`./apiControllers`);
router.use(`/api/`,apiRoutes);

module.exports = router;