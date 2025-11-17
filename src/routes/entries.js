const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

router.get("/entries", verifyToken, async (req,res) => {

    res.json({message: "This is protected data", user:req.user });
});

module.exports = router;