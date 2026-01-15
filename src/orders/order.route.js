const express = require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller');

const router = express.Router();

router.post("/",createAOrder)

// get orders bu user email
router.get("/email/:email",getOrderByEmail)

module.exports = router;