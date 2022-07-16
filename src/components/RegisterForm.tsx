import { useState } from "react";
import { createUser, ICreateUserData } from "../controllers/createUser";

import "../style/components/registerForm.scss";

const RegisterForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [error, setError] = useState("");

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handlePasswordConfirmChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPasswordConfirm(event.target.value);
    }

    var user = {
        name: name,
        email: email,
        password: password,
        confirmPassword: passwordConfirm,
        subscriptionType: "free"
    } as ICreateUserData;

    const registerUser = () => {
        const messageContainer = document.querySelector('.form-group.message') as HTMLDivElement;
        const messageElement = messageContainer.querySelector("span") as HTMLSpanElement;
        
        const hideError = () => {
            messageContainer.classList.remove("error");
            messageContainer.style.display = "none";
        }
        
        createUser(user).then(response => {            
            console.log(response);
            
            if (response.success) {
                let messageText = "Cadastro realizado com sucesso, redirecionando para página de login...";
                messageElement.innerHTML = messageText;
                messageContainer.classList.add("success");
                messageContainer.style.display = "flex";
                
                setTimeout(window.location.href = "/login", 3000);
            }
            
        }).catch(error => {
            let errorData = error.response.data;
            console.log(errorData)
            
            if (errorData.errorId === 1) {
                let messageText = "Suas senhas não conferem. Favor revisar e tentar novamente!";
                messageElement.innerHTML = messageText;
                messageContainer.classList.add("error");
                messageContainer.style.display = "flex";
                
                setTimeout(hideError, 5000);
            } else if (errorData.errorId === 2) {
                let messageText = "Endereço de e-mail inválido. Favor revisar e tentar novamente!";
                messageElement.innerHTML = messageText;
                messageContainer.classList.add("error");
                messageContainer.style.display = "flex";
                
                setTimeout(hideError, 5000);
            } else if (errorData.errorId === 3) {
                let messageText = "Senha inválida. Favor revisar e tentar novamente!";
                messageElement.innerHTML = messageText;
                messageContainer.classList.add("error");
                messageContainer.style.display = "flex";
                
                setTimeout(hideError, 5000);
            } else if (errorData.errorId === 4) {
                let messageText = "Endereço de e-mail já registrado. Favor tentar com um novo endereço!";
                messageElement.innerHTML = messageText;
                messageContainer.classList.add("error");
                messageContainer.style.display = "flex";
                
                setTimeout(hideError, 5000);
            }
        })
    }

    return(
        <form className="form-register" autoComplete="off" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="email">Nome</label>
                <input type="text" className="form-control" id="name" placeholder="Gustavo" onChange={handleNameChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="example@meucontrole.com.br" onChange={handleEmailChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input type="password" className="form-control" id="password" placeholder="********" onChange={handlePasswordChange} />
            </div>
            <div className="form-group">
                <label htmlFor="passwordConfirm">Confirmar senha</label>
                <input type="password" className="form-control" id="passwordConfirm" placeholder="********" onChange={handlePasswordConfirmChange} />
            </div>
            <div className="form-group message">
                <span>Erro ao realizar cadastro</span>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={registerUser}>Registrar</button>
            </div>
        </form>
    )
}

export default RegisterForm;
