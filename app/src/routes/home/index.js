"use strict";

const express = require("express");
const router = express.Router();

const homeController = require("./home.ctrl");

router.get("/", homeController.output.home);

router.get("/login", homeController.output.login);
router.post("/login", homeController.process.login);

router.get("/register", homeController.output.register);
router.post("/register", homeController.process.register);

module.exports = router;
