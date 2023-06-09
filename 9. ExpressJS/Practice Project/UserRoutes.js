const express = require("express");

const router = express.Router();
const registerUser = require("./UserController");

router.route("/register").post(registerUser);
router.route("/register").get((req,res) => {
    res.send("Hello, there");
});

// Or can also be done using below method
// router.route("/register").post(registerUser).get(registerUser);

module.exports = router;