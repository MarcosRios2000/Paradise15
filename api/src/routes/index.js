const { Router } = require('express');

const usersRoute = require("./users/Users");


const router = Router();

router.get("/", (req, res) => {
    res.send("estoy en home")
})


router.use("/users", usersRoute);



module.exports = router;
