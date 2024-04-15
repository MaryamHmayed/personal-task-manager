const express = require("express");
const { createBoard } = require("../controllers/board.controller");
const router = express.Router();



router.post('/', createBoard);

module.exports = router;