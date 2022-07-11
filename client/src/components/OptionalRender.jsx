import React, { useState } from "react";

const LoginButton = ({ logginAction }) => {
    return <button onClick={logginAction}>Login</button>;
};

const LogoutButton = ({ logoutAction }) => {
    return <button onClick={logoutAction}>Logout</button>;
};

export default function OptionalRender() {
    const [access, setAccess] = useState(true);
    const [nMessages, setnMessages] = useState(0);

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
        optionalButton = <LoginButton logginAction={logginAction} />;
    }

    // unread message
    let addMessages = () => {
        setnMessages(nMessages + 1);
    };

    return (
        <div>
            {/* Optional Button */}
            {optionalButton}
            {/* N message unread */}
            {nMessages > 0 && nMessages === 1 && (
                <p>You have {nMessages} unread message</p>
            )}
            {nMessages > 0 && <p>You have {nMessages} new messages...</p>}
            {nMessages === 0 && <p>You have no new messages...</p>}
            <button onClick={addMessages}>Add New Message</button>
            {/* Ternary Operator */}
            {nMessages > 0 && nMessages === 1 ? (
                <p>You have {nMessages} new message </p>
            ) : (
                <p>You have no new messages...</p>
            )}
            <button onClick={addMessages}>Add your first message</button ? d>
        </div>
    );
}
