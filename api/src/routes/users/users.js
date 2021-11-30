const express = require("express");

const router = express.Router();



router.post("/query", (req, res, next) =>{

    const { name, lastName, country, school, celPhone, email, query} = req.body;

    
})









module.exports = router;