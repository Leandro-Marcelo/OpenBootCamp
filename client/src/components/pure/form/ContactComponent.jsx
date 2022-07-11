import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact";

export default function ContactComponent({ contact }) {
    return (
        <div>
            <h2>Name: {contact.name}</h2>
            <h3>Lastname: {contact.lastname}</h3>
            <h4>Email: {contact.email}</h4>
            <h5>
                This contact is:{" "}
                {contact.conectado
                    ? "Contacto En Línea"
                    : "discContacto No Disponibleonnected"}
            </h5>
        </div>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};
