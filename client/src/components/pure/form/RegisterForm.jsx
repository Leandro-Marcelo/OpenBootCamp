import React, { useState } from "react";

export default function RegisterForm() {
    const initialData = [
        {
            user: "",
            name: "",
            email: "",
            password: 1,
        },
    ];

    const [data, setData] = useState(initialData);

    return <div>RegisterForm</div>;
}
