const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fs = require("fs");
const logger = require("./src/handlers/logger_handler");
let app = express();
app.fs = fs;

app.use(logger);
