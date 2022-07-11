import React from "react";

import { Contact } from "../../models/contact";
import ContactComponent from "../pure/form/ContactComponent";

export default function ContactListComponent() {
    const defaultContact = new Contact(
        "Leandro",
        "Marcelo",
        "lmarcelos2019@gmail.com",
        false
    );
    return (
        <div>
            <div>Your Task</div>
            <ContactComponent contact={defaultContact} />
        </div>
    );
}
