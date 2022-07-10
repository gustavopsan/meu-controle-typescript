import hidePass from "../assets/img/hide-pass.png";
import showPass from "../assets/img/show-pass.png";

import "../style/components/loginForm.scss";

interface FormProps {
    togglePassword: () => void;
    showPassword: boolean;
}

const LoginForm = (props:FormProps) => {
    return (
        <form className="form-login" autoComplete="off">
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
                    <input type={props.showPassword ? "text" : "password"} className="form-control" id="password" placeholder="********" />
                    <button type="button" className="show-password" onClick={props.togglePassword}>
                    <img src={props.showPassword ? showPass : hidePass} alt="Mostrar/Ocultar Senha" width="24px" height="24px"/>
                    </button> 
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Entrar</button>
            </div>
        </form>
    )
}

export default LoginForm;