const express = require('express');
const Book = require('./book.model');
const { postBook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();



// post = when submit something frontend to DB
// get = when get something back from DB
// put/patch = when edit or update something
// delete = when delete something
router.post("/create-book",verifyAdminToken,postBook)

router.get("/",getAllBooks)

router.get("/:id",getSingleBook)

// update a book endpoint

router.put("/edit/:id",verifyAdminToken,updateBook)

// delete a book 

router.delete("/:id",verifyAdminToken,deleteBook)

module.exports = router;