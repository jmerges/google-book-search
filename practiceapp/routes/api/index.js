const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
// router.route("/google")
//     .then(result => console.log(result));

router.use("/books", bookRoutes);

module.exports = router;
