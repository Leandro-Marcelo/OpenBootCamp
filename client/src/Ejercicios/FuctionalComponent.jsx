import React, { useEffect, useState } from "react";

export default function FuctionalComponent() {
    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José",
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setTime((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad,
            };
        });
    };

    const [time, setTime] = useState(initialState);

    return (
        <div>
            <h2>
                Hora Actual:
                {time.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {time.nombre} {time.apellidos}
            </h3>
            <h1>Edad: {time.edad}</h1>
        </div>
    );
}
