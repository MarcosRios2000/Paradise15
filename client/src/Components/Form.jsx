import './Form.css'
import React, { useState } from "react";



const initialState = {
    name: "",
    lastname: "",
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
            "lastname",
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
                <div className={`inputContainer ${error.lastname ? "danger" : ""}`}>
                    <label>Apellido:</label>
                        <input
                            onChange={(e) => {
                                handleInputChange(e);
                                validateInput(e);
                                }}
                            type="text"
                            name="lastname"
                            value={input.lastname}
                            className={error && "danger"}
                        />
                        <span className="error">{error?.lastname}</span>
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