import './Form.css'
import React, { useState } from "react";
import axios from 'axios';



const initialState = {
    name: "",
    lastName: "",
    country: "",
    school: "",
    phone: "",
    email: "",
    inquery: "",
};



export default function Form(){
    const [error, setError] = useState(initialState);
    const [input, setInput] = useState(initialState);

    const clearForm = function () {
        setInput(initialState);
      };
    
    const validateInput = function (e) {
        let { name } = e.target;
        let strings = [
            "name",
            "lastName",
            "country",
            "school",
            "inquery",
          ];
        if(strings.includes(name)){
            if(e.target.value === ""){
                setError({ ...error, [name]: "Este campo es obligatorio" });
            } else {
                setError({ ...error, [name]: "" });
            }
        }
        if(name === "phone"){
            if(e.target.value.length < 9){
                setError({ ...error, [name]: "Mínimo 10 numeros" });
            } else {
                setError({ ...error, [name]: "" });
            }
        }
        if(name === "email"){
            if((/$^|.+@.+..+/).test(e.target.value)){
                setError({ ...error, [name]: "" });
            } else {
                setError({ ...error, [name]: "No es un mail válido" });
            } 
        }
    };

    const handleSubmit = function (e) {
        e.preventDefault();
        const form = {name: input.name, lastName: input.lastName, 
            country: input.country, school: input.school, phone: input.phone,
            email: input.email, inquery: input.inquery }
        axios.post('http://localhost:3001/sendMail/query', form)
        .then(response => {
            console.log(response)
            alert('Se ha enviado su consulta')
        })
        .catch(err => alert(err))
        clearForm();
    };
    
    const handleInputChange = function (e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
    };

    return(
        <div className="container">
        <div className="formContainer">
            <img className="logoSmall" src="/images/LogoParadiseSmall.png" alt="Logo" />
            <form onSubmit={handleSubmit}>
               <label>Envianos tu consulta</label>
                <div className={`inputContainer ${error.name ? "danger" : ""}`}>
                    <label>Nombre:</label>
                        <input
                            onChange={(e) => {
                                handleInputChange(e);
                                validateInput(e);
                                }}
                            type="text"
                            name="name"
                            value={input.name}
                            className={error && "danger"}
                        />
                        <span className="error">{error?.name}</span>
                </div>
                <div className={`inputContainer ${error.lastName ? "danger" : ""}`}>
                    <label>Apellido:</label>
                        <input
                            onChange={(e) => {
                                handleInputChange(e);
                                validateInput(e);
                                }}
                            type="text"
                            name="lastName"
                            value={input.lastName}
                            className={error && "danger"}
                        />
                        <span className="error">{error?.lastName}</span>
                </div>
                <div className={`inputContainer ${error.country ? "danger" : ""}`}>
                    <label>Pais:</label>
                        <input
                            onChange={(e) => {
                                handleInputChange(e);
                                validateInput(e);
                                }}
                            type="text"
                            name="country"
                            value={input.country}
                            className={error && "danger"}
                        />
                        <span className="error">{error?.country}</span>
                </div>
                <div className={`inputContainer ${error.school ? "danger" : ""}`}>
                    <label>Colegio:</label>
                        <input
                            onChange={(e) => {
                                handleInputChange(e);
                                validateInput(e);
                                }}
                            type="text"
                            name="school"
                            value={input.school}
                            className={error && "danger"}
                        />
                        <span className="error">{error?.school}</span>
                </div>
                <div className={`inputContainer ${error.phone ? "danger" : ""}`}>
                    <label>Celular:</label>
                        <input
                            onChange={(e) => {
                                handleInputChange(e);
                                validateInput(e);
                                }}
                            type="text"
                            name="phone"
                            value={input.phone}
                            className={error && "danger"}
                        />
                        <span className="error">{error?.phone}</span>
                </div>
                <div className={`inputContainer ${error.email ? "danger" : ""}`}>
                    <label>E-mail:</label>
                        <input
                            onChange={(e) => {
                                handleInputChange(e);
                                validateInput(e);
                                }}
                            type="text"
                            name="email"
                            value={input.email}
                            className={error && "danger"}
                        />
                        <span className="error">{error?.email}</span>
                </div>
                <div className={`inputContainerInquery ${error.inquery ? "danger" : ""}`}>
                    <label>Consulta:</label>
                        <input
                            onChange={(e) => {
                                handleInputChange(e);
                                validateInput(e);
                                }}
                            type="text"
                            name="inquery"
                            value={input.inquery}
                            className={error && "danger"}
                        />
                        <span className="error">{error?.inquery}</span>
                </div>
                <button className="button" type="submit">
                    Enviar
                </button>
            </form>
        </div>
        </div>
    )
}