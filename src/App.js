
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from './component/Home';
import Login from "./component/Login"
import Feedback from './component/Feedback';
import Navbar from './component/Navbar';
import {useSelector} from "react-redux"
import Register from './component/Register';

function App() {

  let a = false;

  const set = useSelector((state)=>state.user);

  if(set!==null){
    a = true
  }else{
    a = false
  }


  
  return (
   <>
   {!a ? (<BrowserRouter>
   <Switch>
     <Route exact path="/">
       <Login/>

     </Route>
     <Route exact path="/reg">
       <Register/>
     </Route>
   </Switch>
   
   </BrowserRouter>):(<BrowserRouter>
   <Navbar/>
   <Switch>
     <Route  exact path="/">
        <Home/>
     </Route>
     <Route  path="/feed" >
       <Feedback/>
     </Route>
   </Switch>
   
   </BrowserRouter>
)}
   

   </>
  );
}

export default App;
