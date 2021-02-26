const router = require("express").Router();
const { get } = require("mongoose");
const booksController = require("../../controller/booksController");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;