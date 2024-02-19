import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css"



const LoginForm = ({ isOpen, onClose }) => {
    const { register } = useForm();
    // const [value, setValue] = useState('')
    const [api, setApi] = useState('')

    // const handleLogin = () => {
    //       setApi({
    //         email: []
    //       })
    // }
    console.log(api, '1')
    return (
        <div className="container">
            <form>
                <h4> Log-in </h4>
                <div>
                    <input
                        {...register("email", { onChange: (e) => setApi(e) })}
                        name="email"
                        placeholder="Email"

                    />
                </div>
                <div>
                    <input  {...register("message", { required: "Required", })}
                        name="password"
                        placeholder="Password"
                        type="text"
                        onChange={e => setApi(e.target.api.password)}
                    />
                </div>
                <button onClick={() => console.log(api, '2')} type="submit" >Login</button>

            </form>


        </div>
    )
}

export default LoginForm;