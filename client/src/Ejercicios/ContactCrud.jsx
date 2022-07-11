import React, { useState } from "react";
import Contact from "./Contact";
import Form from "./Form";

export default function ContactCrud() {
    const mockup = [
        { id: "1", name: "Leandro" },
        { id: "2", name: "Xavier" },
        { id: "3", name: "Marcelo" },
        { id: "4", name: "Supanta" },
        { id: "5", name: "Leandro2" },
    ];

    const [contacts, setContacts] = useState(mockup);

    const createContact = (name, e) => {
        e.preventDefault();
        setContacts([...contacts, { name: name, id: name }]);
    };

    const deleteContact = (id) => {
        const updated = contacts.filter((contact) => contact.id !== id);
        setContacts(updated);
    };

    return (
        <div>
            <Form createContact={createContact} />
            <div>
                {contacts &&
                    contacts.length > 0 &&
                    contacts.map((contact) => (
                        <Contact
                            contact={contact}
                            key={contact.id}
                            deleteContact={deleteContact}
                        />
                    ))}
            </div>
        </div>
    );
}
