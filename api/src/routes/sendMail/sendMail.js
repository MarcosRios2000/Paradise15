const express = require("express");
const transporter = require("../../services/mailer/mailer")


const { MAILER_EMAIL_DEV } = process.env;
const router = express.Router();



router.post("/query", (req, res, next) =>{

    const { name, lastName, country, school, celPhone, email, query } = req.body;


    const emailOptions = {
        from: MAILER_EMAIL_DEV,
        to: "Fernando.Kaganovicz@hotmail.com",
        subject: "Titulo del mail",
        text: "Contenido del mail"
    }


    transporter.sendMail(emailOptions)
    .then((info) => {
        console.log(info, 'la info si todo salió bien')
        res.send('email enviado correctamente')
    })
    .catch(err => {
        next(err)
    })
    
})  









module.exports = router;