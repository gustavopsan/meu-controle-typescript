import React from "react";

import LoginContentBody from "../components/LoginContentBody";
import LoginHeader from "../components/LoginHeader";
import RegisterContentHeader from "../components/RegisterContentHeader";
import RegisterFooter from "../components/RegisterFooter";
import RegisterForm from "../components/RegisterForm";
import Wrapper from "../components/Wrapper";

const Register = () => {
    return (
        <React.Fragment>
            <Wrapper>
                <LoginHeader/>
                <div className="register-content">
                    <RegisterContentHeader/>
                    <LoginContentBody>
                        <RegisterForm/>
                    </LoginContentBody>
                    <RegisterFooter/>
                </div>
            </Wrapper>
        </React.Fragment>
    );
}

export default Register;