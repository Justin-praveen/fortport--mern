import React, { useState } from 'react';
import {useForm} from "react-hook-form"

const Feedback = () => {

    const [feed,setfeed] = useState(
        null
    )
    const {register,handleSubmit} = useForm();
    const fed = async(data)=>{
        setfeed(data);
        await console.log(feed);

    }
    return (
        <div>
            <form onSubmit={handleSubmit(fed)}>
                <input {...register("feed")}/>
                <input {...register("file")} type="file"/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Feedback
