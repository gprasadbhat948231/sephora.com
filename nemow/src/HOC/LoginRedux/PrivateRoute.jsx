import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateRoute({children}){
    const {isAuth}=useSelector((store)=>store.authManager);
    if(!isAuth){
        return <Navigate to='/'/>
    }
    return children;
}
export default PrivateRoute;