const { Router } = require('express');

// const usersRoute = require("./users/Users");
const sendMailRoute = require("./sendMail/sendMail");


const router = Router();

router.get("/", (req, res) => {
    res.send("estoy en home")
})


// router.use("/users", usersRoute);
router.use("/sendMail", sendMailRoute);



module.exports = router;
