import React from 'react';
import {useSelector} from "react-redux"

const Home = () => {

   const st = useSelector((state)=>state.user)
  React.useEffect(()=>{
       console.log(st)
       console.log(st.data)

   },[st])
   
 

    return (
        <div>
            <h1>Iam from home</h1>
            <h1>{st && st.data.email}</h1>
            
           
         
            
        </div>
    )
}

export default Home
