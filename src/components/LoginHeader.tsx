import React from "react";

import "../style/components/loginHeader.scss";

import Logo from "../assets/img/logo.svg";

const LoginHeader = () => {
    return (
        <React.Fragment>
            <div className="login-header">
                <img src={Logo} width="48px" height="48px" alt="Logo Meu Controle"/>
                <h2 className="logo-text">meucontrole</h2>
                <h2 className="logo-text-2">Dashboard</h2>
            </div>
        </React.Fragment>
    );
}

export default LoginHeader;