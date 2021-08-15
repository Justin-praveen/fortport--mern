import React, { useState,useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
import sign from '../firebase';
import axios from "axios";






const Login = () => {
    const [users,setusers] = useState(null);
    
    const dispatch = useDispatch();

    
    

    const Log = (data)=>{
       sign.signInWithEmailAndPassword(data.email,data.password).then((da)=>{
           const a = da.user;
           console.log(a);
            setusers(data);
           
            
          
        console.log(users)
       }).catch((error)=>{
           const er  = error.message;
           console.log(er)

       })
      
    }

    useEffect(async() => {
        if(users!==null){
            const e =  users.email
            
            console.log(e);
              const g = await axios.get(`https://fortport--mern.herokuapp.com/reg/data/${e}`);
               dispatch({
                type : "login",
                use : g
            })
    
        }else{
            console.log("not yet posted");
        }
     
       
    }, [users])



    

    const {register,handleSubmit} = useForm()
    return (
        <>
      <form onSubmit={handleSubmit(Log)}>
          <input {...register("email")}/>
          <input {...register("password")}/>
          <button type="submit">Login</button>
      </form>
      <button><Link to="/reg">Signup</Link></button>
     </>
    )
}

export default Login;
