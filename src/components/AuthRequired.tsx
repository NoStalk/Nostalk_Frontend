import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { userData } from "../features/userDataSlice";
import { InfinitySpin } from "react-loader-spinner";

const AuthRequired =  (props: any) => {
    const user = useAuth();
    const location = useLocation();
    console.log("location:", location.pathname, user);
    if (!user.hasLoaded) {
        console.log("fetching user data in AuthRequired");
        axios.get<userData>(process.env.REACT_APP_BACKEND_URL + '/refresh', { withCredentials: true })
            .then(response => {
                console.log("fetched user data in AuthRequired");
                user.logIn(response.data, location.pathname);
            })
            .catch(error => {
                console.error(error);
                user.setLoaded();
            });
        return (
          <div
            style={{
              display: "grid",
              placeItems: "center",
              width: "100vw",
              height: "100vh",
            }}
          >
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        );
    }
    else if (user.isLoggedIn || location.pathname === "/login" || location.pathname === "/") {
        console.log("showing outlet");
        return <Outlet />
    }
    else {
        console.log("going to login page");
        return <Navigate to="/login" state={{ from: location }} replace />
    }


}

export default AuthRequired;