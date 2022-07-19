import "../style/components/loginFooter.scss";

const LoginFooter = () => {
    return (
        <div className="login-content-footer">
            <span>Ainda não tem uma conta?</span>
            <a href="/register">Cadastre-se</a>
        </div>
    )
}

export default LoginFooter;