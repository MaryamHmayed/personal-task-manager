const express = require("express");
const { createTask,getTasks,deleteTask} = require("../controllers/task.controller");
const isAuthenticated = require("../middlewares/auth.middleware");
const router = express.Router();

router.use(isAuthenticated);



router.post("/", createTask);
router.get("/get", getTasks);


module.exports = router;