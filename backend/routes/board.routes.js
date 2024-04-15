const express = require("express");
const { createBoard, getAllBoards,  deleteBoard } = require("../controllers/board.controller");
const isAuthenticated = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(isAuthenticated);

router.post('/', createBoard);
router.get("/all", getAllBoards);
router.delete("/:id", deleteBoard);



module.exports = router;