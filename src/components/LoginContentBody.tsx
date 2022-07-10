import React from "react";

import "../style/components/loginContentBody.scss";

interface ContentProps {
    children: React.ReactNode;
}

const LoginContentBody = (props:ContentProps) => {
    return (
        <div className="login-content-body">
            {props.children}
        </div>
    )
}

export default LoginContentBody;