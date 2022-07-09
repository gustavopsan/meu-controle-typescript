import React, {useState} from "react";

import Logo from "../assets/img/logo.svg";
import hidePass from "../assets/img/hide-pass.png";
import showPass from "../assets/img/show-pass.png";

import "../style/global.scss";
import "../style/login.scss";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <React.Fragment>
        <section className="login-wrapper">
            <div className="login-header">
                <img src={Logo} width="48px" height="48px" alt="Logo Meu Controle"/>
                <h2 className="logo-text">meucontrole</h2>
                <h2 className="logo-text-2">Dashboard</h2>
            </div>
            <div className="login-content">
                <div className="login-content-header">
                    <h3>Área de Login</h3>
                    <span>insira seu e-mail e senha cadastrados</span>
                </div>
                <div className="login-content-body">
                    <form className="form-login">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" id="email" placeholder="example@meucontrole.com.br" />
                        </div>
                        <div className="form-group">
                            <div className="label-wrapper">
                              <label htmlFor="password">Senha</label>
                              <span>Esqueceu sua senha?</span>
                            </div>
                            <div className="password-wrapper">
                              <input type={showPassword ? "text" : "password"} className="form-control" id="password" placeholder="********" />
                              <button type="button" className="show-password" onClick={togglePassword}>
                                <img src={showPassword ? showPass : hidePass} alt="Mostrar/Ocultar Senha" width="24px" height="24px"/>
                              </button>
                              
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default Login;