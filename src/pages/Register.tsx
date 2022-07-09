import React from "react";

import Logo from "../assets/img/logo.svg";

import "../style/global.scss";
import "../style/register.scss";

const Register = () => {
    return (
        <React.Fragment>
            <section className="register-wrapper">
                <div className="register-header">
                    <img src={Logo} width="48px" height="48px" alt="Logo Meu Controle"/>
                    <h2 className="logo-text">meucontrole</h2>
                    <h2 className="logo-text-2">Dashboard</h2>
                </div>
                <div className="register-content">
                    <div className="register-content-header">
                        <h3>Registre-se</h3>
                        <span>insira as informações nos campos abaixo</span>
                    </div>
                    <div className="register-content-body">
                        <form className="form-register">
                            <div className="form-group">
                                <label htmlFor="email">Nome</label>
                                <input type="text" className="form-control" id="name" placeholder="Gustavo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" className="form-control" id="email" placeholder="example@meucontrole.com.br" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input type="password" className="form-control" id="password" placeholder="********" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordConfirm">Senha</label>
                                <input type="password" className="form-control" id="passwordConfirm" placeholder="********" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Registrar</button>
                            </div>
                        </form>
                    </div>
                    <div className="register-content-footer">
                        <span>Já tem uma conta?</span>
                        <a href="/login">Faça Login</a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Register;