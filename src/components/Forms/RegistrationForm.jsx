import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css"

const RegistrationForm = (props) => {
    const { register } = useForm();

    return (
        <div className="container">
            <form>
                <h4> Log-in </h4>
                <div>
                    <input  {...register("message", { required: "Required", })} name="name" placeholder="First Name" />
                </div>
                <div>
                    <div>
                        <input  {...register("message", { required: "Required", })} name="lastname" placeholder="Last Name" />
                    </div>
                    <div>
                        <input  {...register("message", { required: "Required", })} name="lastname" placeholder="Email" />
                    </div>
                    <div>
                        <input  {...register("message", { required: "Required", })} name="lastname" placeholder="Password" />
                    </div>
                    <div>
                        <input  {...register("message", { required: "Required", })} name="lastname" placeholder="To repeat your Password" />
                    </div>
                    <div>
                        <input  {...register("message", { required: "Required", })} name="lastname" placeholder="Age" />
                    </div>
                </div>
                <button type="submit" >Registration</button>
            </form>

        </div>
    )
}

export default RegistrationForm;