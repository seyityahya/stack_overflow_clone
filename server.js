const express = require("express");
const dotenv = require("dotenv");
const routers = require("./router/index");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const path = require("path");

//Environment Variables
dotenv.config({
    path : "./config/env/config.env"
});

//MongoDb Connection
connectDatabase();

const app = express();

// Express body midware
app.use(express.json());

const PORT = process.env.PORT;

// ROuters Middleware
app.use("/api",routers);

// Error Handler
app.use(customErrorHandler);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT,() => {
    console.log(`App started on ${PORT}`);
});
