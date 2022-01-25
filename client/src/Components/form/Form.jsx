import './Form.css';
import React, { useState } from "react";
import axios from 'axios';
import { Carousel } from '../carousel/carousel';
import BotonIzquierda from '../../assets/images/Brasil.png';
import BotonDerecha from '../../assets/images/Argentina.png';
import BotonCentral from '../../assets/images/BtnCentral.png';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Whatsapp from '../../assets/images/whatsapp.png';
import Youtube from '../../assets/images/youtube.png';

import { NavBar } from '../navBar/navBar.jsx';


const initialState = {
    completeName: "",
    city: "",
    whatsapp: "",
    inquery: "",
};

const { HEROKU_BACKEND } = process.env;

export default function Form() {
    const [error, setError] = useState(initialState);
    const [input, setInput] = useState(initialState);

    const clearForm = function () {
        setInput(initialState);
    };

    const validateInput = function (e) {
        let { name } = e.target;
        let strings = [
            "completeName",
            "city",
            "inquery",
        ];
        if (strings.includes(name)) {
            if (e.target.value === "") {
                setError({ ...error, [name]: "Este campo es obligatorio" });
            } else {
                setError({ ...error, [name]: "" });
            }
        }
        if (name === "whatsapp") {
            if (isNaN(e.target.value) || e.target.value.length < 10) {
                setError({ ...error, [name]: "Solo números, mínimo 10" });
            } else {
                setError({ ...error, [name]: "" });
            }
        }
    };

    const handleSubmit = function (e) {
        e.preventDefault();
        const form = {
            completeName: input.completeName,
            city: input.city, whatsapp: input.whatsapp,
            inquery: input.inquery
        }
        axios.post(`${HEROKU_BACKEND}/sendMail/query`, form)
            .then(response => {
                console.log(response)
            })
            .catch(err => alert(err))
        window.scrollTo(0, 0)
        clearForm();
        document.getElementById("completeName").value = ""
    };
    const handleSubmitDsabled = function (e) {
        e.preventDefault();
    };

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    return (

        <div className="together-waves">

            <div className="containers">

                <NavBar />

                <Carousel />

                <div className="paginaConstruccion">🚧 Página en construcción 🚧</div>
                
                <div className="formContainer">
                    <img className="logoSmall" src="/images/LogoParadiseSmall.png" alt="Logo" />
                    <form onSubmit={(error.inquery
                        || error.completeName
                        || error.city
                        || error.whatsapp)
                        || (input.inquery.length === 0
                            || input.completeName.length === 0
                            || input.city.length === 0
                            || input.whatsapp.length === 0) ? handleSubmitDsabled : handleSubmit}>
                        <div>Envianos tu consulta</div>
                        <div className={`inputContainer ${error.completeName ? "danger" : ""}`}>
                            <label className='titulos'>Nombre y Apellido:</label>
                            <input
                                onChange={(e) => {
                                    handleInputChange(e);
                                    validateInput(e);
                                }}
                                type="text"
                                id="completeName"
                                name="completeName"
                                value={input.completeName}
                                className={error && "danger"}
                            />
                            <span className="error">{error?.completeName}</span>
                        </div>
                        <div className={`inputContainer ${error.city ? "danger" : ""}`}>
                            <label>Ciudad:</label>
                            <input
                                onChange={(e) => {
                                    handleInputChange(e);
                                    validateInput(e);
                                }}
                                type="text"
                                name="city"
                                value={input.city}
                                className={error && "danger"}
                            />
                            <span className="error">{error?.city}</span>
                        </div>
                        <div className={`inputContainer ${error.whatsapp ? "danger" : ""}`}>
                            <label>Whatsapp:</label>
                            <input
                                onChange={(e) => {
                                    handleInputChange(e);
                                    validateInput(e);
                                }}
                                type="text"
                                name="whatsapp"
                                value={input.whatsapp}
                                className={error && "danger"}
                            />
                            <span className="error">{error?.whatsapp}</span>
                        </div>
                        <div className={`inputContainerInquery ${error.inquery ? "danger" : ""}`}>
                            <label>Consulta:</label>
                            <textarea
                                onChange={(e) => {
                                    handleInputChange(e);
                                    validateInput(e);
                                }}
                                type="text"
                                name="inquery"
                                value={input.inquery}
                                className={error && "danger"}>
                            </textarea>
                            <span className="error">{error?.inquery}</span>
                        </div>
                        <button className={`button ${(error.inquery
                            || error.completeName
                            || error.city
                            || error.whatsapp)
                            || (input.inquery.length === 0
                                || input.completeName.length === 0
                                || input.city.length === 0
                                || input.whatsapp.length === 0)
                            ? "buttonDanger" : ""}`} type="submit">
                            Enviar
                        </button>
                    </form>
                </div>

                <div className='btns'>
                    <img className='iconLeft' src={BotonIzquierda} alt='img not found' />
                    <img className='iconRight' src={BotonDerecha} alt='img not found' />
                </div>

                <div className='btnMedium'>
                    <img className='iconMedium' src={BotonCentral} alt='img not found' />
                </div>

            </div>
            
            {/* <div className='divLogoFooter'>
                <img className='logoFooter' src="/images/LogoParadise.png" alt="img not found" />
            </div> */}
            <div className='divSocialIcons'>
                <img className='socialIcon' src={Facebook} alt="img not found" />
                <img className='socialIcon' src={Instagram} alt='img not found'/>
                <img className='socialIcon' src={Whatsapp} alt='img not found'/>
                <img className='socialIcon' src={Youtube} alt='img not found'/>
            </div>
            <div className='titleFooter'>
                <strong style={{color: 'white'}}>El viaje</strong>
            </div>
            <br/>
            <div className='textFooter'>
                <p style={{color: 'white'}}>El día a día</p>
                <p style={{color: 'white'}}>Hoteles</p>
                <p style={{color: 'white'}}>Paradise Chile</p>
                <p style={{color: 'white'}}>Paradise Card</p>
            </div>
            {/* <div className='titleFooter'>
                <strong style={{color: 'white'}}>El viaje</strong>
            </div>
            <div className='textFooter'>
                <p style={{color: 'white'}}>El día a día</p>
            </div>
            <div className='textFooter2'>
                <p style={{color: 'white'}}>Hoteles</p>
            </div>
            <div className='textFooter3'>
                <p style={{color: 'white'}}>Paradise Chile</p>
            </div>
            <div className='textFooter4'>
                <p style={{color: 'white'}}>Paradise Card</p>
            </div> */}
        </div>
    )
}