import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { logInUser, logOutUser, userData, userSliceData, setHasLoaded } from "../features/userDataSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

/** 
 * @property isLoggedin: boolean -> weather the current user is logged in, if false all other props are set to default value(garbage).
 * @property email: string -> email (logged in) | '' (logged out)
 * @property firstName: string -> firstName (logged in) | '' (logged out)
 * @property lastName: string -> lastName (logged in) | '' (logged out)
 * @function login(userData, from) -> logs in user (stores supplied userData to recux store) and navigates to from (default: '/')
 * @function logout() -> logs out user (removes stored data with defualt values)
 */
interface userDataHookInterface extends userSliceData {
    logIn: (userData: userData, from?: string) => void,
    logOut: () => void
    setLoaded: () => void
}

const useAuth = (): userDataHookInterface => {

    let userData = useAppSelector(state => state.userData);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const logIn = (userData: userData, from: string = '/') => {
        console.log('logIn:', from);
        dispatch(logInUser(userData));
        navigate(from, { replace: true });
    }

    const logOut = () => {
        if (!process.env.REACT_APP_BACKEND_URL) {
            console.error("No backend url set in enviroment variables");
            return;
        }

        try {
            axios.get(process.env.REACT_APP_BACKEND_URL + '/logout',
                { withCredentials: true });
            dispatch(logOutUser());
            navigate('/');
        }
        catch (error) {
            console.error(error);
        }
    }

    const setLoaded = () => {
        dispatch(setHasLoaded());
    }



    const userHookData: userDataHookInterface = {
        ...userData,
        logIn,
        logOut,
        setLoaded
    }

    return userHookData;
}

export default useAuth;