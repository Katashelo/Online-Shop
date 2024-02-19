import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Forms = ({ isLogin }) => {
    const [login, setLogin] = useState(isLogin)
    const handleLogin = () => {
        setLogin(false)
    }
    return (
        <div>
            {login ? <LoginForm /> : <RegistrationForm />}
            {login ? <button onClick={handleLogin} >
                      I haven`t had acount yet </button>
                   : null  }
            
        </div>
    )
}

export default Forms;