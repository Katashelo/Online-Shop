import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css"
import useFetchItems from "../../API/useFetchItems";



const LoginForm = ({ isOpen, onClose }) => {
    const { register, getValues } = useForm();
    const [params, setParams] = useState({login:'', password:''})
    const { item, error, isLoaded } = useFetchItems('https://nestjs-boilerplate-test.herokuapp.com/api/v1/auth/email/login', params)
    console.log(params, 'params')
    return (
        <div className="container">
            <form>
                <h4> Log-in </h4>
                <div>
                    <input
                        {...register("email")}
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input  {...register("password")}
                        name="password"
                        placeholder="Password"
                        type="text"
                    />
                </div>
                <button onClick={() => {
                    setParams({login: getValues('email'), password: getValues('password')})
                }}
                    type="button" >Login</button>

            </form>


        </div>
    )
}

export default LoginForm;