import React from "react";
import "../style/components/wrapper.scss";

export interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper = (props:WrapperProps) => {
    return (
        <div className="login-wrapper">
            {props.children}
        </div>
    );
}

export default Wrapper;