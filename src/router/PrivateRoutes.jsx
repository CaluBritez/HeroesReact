import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext.jsx";
import { Navigate } from "react-router-dom";


export const PrivateRoutes = ({children}) => {

    const {logged} = useContext(AuthContext);

    return (logged) ? children : <Navigate to="/login" />
}
