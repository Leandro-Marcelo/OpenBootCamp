import React, { useRef } from "react";

export default function Form({ createContact }) {
    const name = useRef();

    return (
        <form>
            <input type="text" name="name" ref={name} />
            <button onClick={(e) => createContact(name.current.value, e)}>
                create
            </button>
        </form>
    );
}
