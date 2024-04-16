const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();
const { connect } = require('./configs/mongoDB.config');
const PORT = process.env.PORT;

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const boardRoutes = require("./routes/board.routes");
app.use("/board",boardRoutes);

const columnRoutes = require("./routes/column.routes");
app.use("/column",columnRoutes);




// var cors = require('cors');
// app.use(cors())

app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Server is listining on port ${PORT}`);
    connect();
  });

