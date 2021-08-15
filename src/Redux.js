
import {createStore} from "redux"

const init ={
    user : null
}

const Red = (state=init,action)=>{
    switch (action.type){
        case "login" :
            return{
                ...state.user,user : action.use
            }
        default:
        return state
    }

}

const store = createStore(Red);

export default store;