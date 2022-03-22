const express = require('express');
const router = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
router.get("/", services.homeRoutes);
router.get("/register", services.register);
router.get("/home", services.home);
router.get("/info", services.info);
router.get("/report", services.report);
router.get("/users", services.users);
router.get("/home/users", controller.find);
router.get('/logout',controller.logout);



router.post("/", controller.login);
router.post("/register", controller.create);
router.post("/home", controller.home);
module.exports = router;
