const express  = require("express");
const router =  express.Router();
const {RenderPage , HomePage} = require("../controllers/user.js");



router.get("/" , RenderPage);
router.post("/user" , HomePage);

module.exports = router