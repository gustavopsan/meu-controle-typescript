import React from "react";

import "../style/components/loginContentBody.scss";

interface ContentProps {
    children: React.ReactNode;
}

const LoginContentBody = (props:ContentProps) => {
    return (
        <React.Fragment>
            <div className="login-content-body">
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default LoginContentBody;