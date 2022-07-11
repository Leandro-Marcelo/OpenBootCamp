import React from "react";

export default function Contact({ contact, deleteContact }) {
    return (
        <div className="d-flex">
            <div>
                <h2>id {contact.id}</h2>
                <h2>name {contact.name}</h2>
            </div>
            <button onClick={() => deleteContact(contact.id)}>delete</button>
        </div>
    );
}
