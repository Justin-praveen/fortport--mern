import React, { useState } from 'react';
import {useForm} from "react-hook-form"
import sign from '../firebase';
import axios from "axios";

const Register = () => {
    const [reg,setreg] = useState(null);

    const sub = async(data)=>{
       await sign.createUserWithEmailAndPassword(data.email,data.password).then((da)=>{
            const a = da.user;
            setreg(data);
            axios.post("https://fortport--mern.herokuapp.com/reg/register",data).then(()=>console.log("osted"))
            console.log(data);
            console.log(reg);
            console.log(a)
            
        }).catch((error)=>{
            const ermes = error.message;
            console.log(ermes);

        })
        
    }

    const {register,handleSubmit} = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit(sub)}>
            <input {...register("names")}/>
                <input {...register("email")}/>
                <input {...register("password")}/>
                <button type="submit">signup</button>
            </form>
            
        </div>
    )
}

export default Register
