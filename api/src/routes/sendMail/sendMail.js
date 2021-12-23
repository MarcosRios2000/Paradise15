const express = require("express");
const transporter = require("../../services/mailer/mailer")


const { MAILER_EMAIL_DEV } = process.env;
const router = express.Router();



router.post("/query", (req, res, next) =>{

    const { name, lastName, country, school, phone, email, inquery } = req.body;

    const emailOptions = {
        from: MAILER_EMAIL_DEV,
        to: "Fernando.Kaganovicz@hotmail.com",
        subject: "Nueva consulta PARADISE 15",
        text: `Nombre: ${name}
               Apellido: ${lastName}
               País: ${country}
               Escuela: ${school}
               Cel: ${phone}
               email: ${email}
               Consulta: ${inquery}`
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