import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css"
import useFetchItems from "../../API/useFetchItems";



const LoginForm = ({ isOpen, onClose }) => {

const LoginOn = ({login, password}) => {
   
    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json, 'testun'))
}

    const { register, getValues } = useForm();
    const [params, setParams] = useState({login:'', password:''})
    // const { item, error, isLoaded } = useFetchItems('https://fakestoreapi.com/auth/login', params)
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
                    // setParams({login: getValues('email'), password: getValues('password')})
                    LoginOn({login: getValues('email'), password: getValues('password')})
                }}
                    type="button" >Login</button>

            </form>


        </div>
    )
}

export default LoginForm;