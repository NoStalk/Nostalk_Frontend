import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRequired = (props: any) => {
    const {isLoggedIn} = useAuth();
    const location = useLocation();

    return (
        isLoggedIn ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default AuthRequired;