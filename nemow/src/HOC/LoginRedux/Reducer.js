import {loading,success,error,logout} from './Actiontypes'
const init={
    loading:false,
    error:false,
    isAuth:false,
    token:""
}
export const authReducer=(state=init,{type,payload})=>{
    switch(type)
    {
        case loading:{
            return {
                ...state,
                loading:true,
                error:false,
                isAuth:false,
                token:""
            }
        }
        case success:{
            return {
                ...state,
                loading:false,
                error:false,
                isAuth:true,
                token:payload
            }
        }
        case error:{
            return {
                ...state,
                loading:false,
                error:true,
                isAuth:false,
                token:""
            }
        }
        case logout:{
            return {
                ...state,
                isAuth:false,
                token:"",
                error:false,
                loading:false
            }
        }

        default:{
            return state
        }
    }
}