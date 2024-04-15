const express = require("express");
const { createColumn, getColumns} = require("../controllers/column.controller");
const isAuthenticated = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(isAuthenticated);



router.post("/", createColumn);
router.get("/get", getColumns);


module.exports = router;