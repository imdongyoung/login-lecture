"use strict";

const express = require("express");
const router = express.Router();

const homeController = require("./home.controler")

router.get("/", homeController.hello);

router.get("/login", homeController.login);

module.exports = router;