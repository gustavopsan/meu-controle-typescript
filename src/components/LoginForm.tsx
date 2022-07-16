import { useState } from "react";
import { authenticate, IAuthenticateData, setCookies, ICookieData } from "../controllers/authenticate";

import hidePass from "../assets/img/hide-pass.png";
import showPass from "../assets/img/show-pass.png";

import "../style/components/loginForm.scss";

interface FormProps {
    togglePassword: () => void;
    showPassword: boolean;
}

const LoginForm = (props:FormProps) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    var userData:IAuthenticateData = {
        email: email,
        password: password
    }

    const authenticateUser = () => {
        const messageContainer = document.querySelector('.form-group.message') as HTMLDivElement;
        const messageElement = messageContainer.querySelector("span") as HTMLSpanElement;

        const hideError = () => {
            messageContainer.classList.remove("error");
            messageContainer.style.display = "none";
        }

        authenticate(userData).then(response => {
            if (response.success) {
                var cookieId: ICookieData = {
                    name: "userId",
                    value: response.userId
                }

                var cookieToken: ICookieData = {
                    name: "token",
                    value: response.token
                }

                setCookies(cookieId);
                setCookies(cookieToken);

                window.location.href = "/";
            }
        }).catch(error => {
            console.log(error.response.data);
            messageElement.innerText = "E-mail ou senha inválidos! Revise os dados e tente novamente.";
            messageContainer.classList.add("error");
            messageContainer.style.display = "block";
            setTimeout(hideError, 3000);
        })
    }

    return (
        <form className="form-login" autoComplete="off" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="example@meucontrole.com.br" onChange={handleEmailChange}/>
            </div>
            <div className="form-group">
                <div className="label-wrapper">
                    <label htmlFor="password">Senha</label>
                    <span>Esqueceu sua senha?</span>
                </div>
                <div className="password-wrapper">
                    <input type={props.showPassword ? "text" : "password"} className="form-control" id="password" placeholder="********" onChange={handlePasswordChange}/>
                    <button type="button" className="show-password" onClick={props.togglePassword}>
                    <img src={props.showPassword ? showPass : hidePass} alt="Mostrar/Ocultar Senha" width="24px" height="24px"/>
                    </button> 
                </div>
            </div>
            <div className="form-group message">
                <span>Erro ao realizar cadastro</span>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={authenticateUser}>Entrar</button>
            </div>
        </form>
    )
}

export default LoginForm;