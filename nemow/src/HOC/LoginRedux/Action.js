import {loading,success,error,logout} from "./Actiontypes";
import axios from 'axios'
export const login=async(dispatch,creds)=>{
    dispatch({type:loading})
    try{
        let res=await axios.post('https://reqres.in/api/login',creds);
        dispatch({type:success,payload:res.data.token})
    }catch(e)
    {
        dispatch({type:error})
    }
}
export const Logout=()=>({type:logout})