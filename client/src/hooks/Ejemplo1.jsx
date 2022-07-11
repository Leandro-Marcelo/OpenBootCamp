import React, { useState } from "react";

export default function Ejemplo1() {
    const valorInicial = 0;
    const [contador, setContador] = useState(valorInicial);

    const personaInicial = {
        nombre: "Leandro Marcelo",
        email: "lmarcelos2019@gmail.com",
    };
    const [persona, setPersona] = useState(personaInicial);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    const actualizarPersonas = (nombre) => {
        setPersona({
            nombre: "Pepe",
            email: "pepe@gmail.com",
        });
    };

    return (
        <div>
            <h1>**** Ejemplo de useState () ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersonas}>Actualizar persona</button>
        </div>
    );
}
