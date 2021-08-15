
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from './component/Home';
import Login from "./component/Login"
import Feedback from './component/Feedback';
import Navbar from './component/Navbar';
import {useSelector} from "react-redux"
import Register from './component/Register';
import Admin from "./component/Admin";

function App() {

  let a = false;

  const set = useSelector((state)=>state.user);

  if(set == null){
    a = false
  }else{
    a = true
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
   
   </BrowserRouter>) :(set.data.isAdmin == true) ? (<BrowserRouter>
   <Switch>
     <Route path="/">
       <Admin/>

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
