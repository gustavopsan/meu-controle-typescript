import React from "react";

import "../style/components/loginContentHeader.scss";

const LoginContentHeader = () => {
    return (
        <React.Fragment>
            <div className="login-content-header">
                <h3>Área de Login</h3>
                <span>insira seu e-mail e senha cadastrados</span>
            </div>
        </React.Fragment>
    );
}

export default LoginContentHeader;