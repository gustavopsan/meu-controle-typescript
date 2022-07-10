import "../style/components/registerForm.scss";

const RegisterForm = () => {
    return(
        <form className="form-register" autoComplete="off">
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
    )
}

export default RegisterForm;