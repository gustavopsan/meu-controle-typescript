import React, {useState} from "react";

import LoginContentBody from "../components/LoginContentBody";
import LoginContentHeader from "../components/LoginContentHeader";
import LoginForm from "../components/LoginForm";
import LoginHeader from "../components/LoginHeader";

import Wrapper from "../components/Wrapper";

const Login = () => {

	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => setShowPassword(!showPassword);

  return (
    <React.Fragment>
        <Wrapper>
            <LoginHeader/>
            <div className="login-content">
                <LoginContentHeader/>
                <LoginContentBody>
                    <LoginForm showPassword={showPassword} togglePassword={togglePassword}/>
                </LoginContentBody>
            </div>
          </Wrapper>
    </React.Fragment>
  );
}

export default Login;