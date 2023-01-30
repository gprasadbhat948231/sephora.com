import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateRoute({children}){
  const {isAuth} = useSelector((store) => store.authManeger);
    if(!isAuth){
        alert("Please Login")
        return <Navigate to='/'/>
    }
    return children;
}
export default PrivateRoute;