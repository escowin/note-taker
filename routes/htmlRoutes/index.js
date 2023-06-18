const router = require("express").Router();
const { homeView, notesView } = require("../../controllers/htmlControllers")

// endpoints to render public html files via .get()
router.route("/").get(homeView)
router.route("/notes").get(notesView);
router.route("*").get(homeView);

module.exports = router;
