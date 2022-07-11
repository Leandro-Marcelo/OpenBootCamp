import React, { useState } from "react";

const LoginButton = ({ logginAction }) => {
    return <button onClick={logginAction}>Login</button>;
};

const LogoutButton = ({ logoutAction }) => {
    return <button onClick={logoutAction}>Logout</button>;
};

export default function OptionalRender() {
    const [access, setAccess] = useState(true);

    let optionalButton;

    /*   const updateAccess = () => {
        setAccess(!access);
    }; */

    const logginAction = () => {
        setAccess(true);
    };

    const logoutAction = () => {
        setAccess(false);
    };

    if (access) {
        optionalButton = <LogoutButton logoutAction={logoutAction} />;
    } else {
        optionalButton = <LogoutButton logginAction={logginAction} />;
    }

    return <div>{optionalButton}</div>;
}
