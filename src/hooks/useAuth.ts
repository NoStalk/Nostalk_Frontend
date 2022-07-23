import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { logInUser, logOutUser, userData, userSliceData } from "../features/userDataSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
}

const useAuth = (): userDataHookInterface => {

    let userData = useAppSelector(state => state.userData);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const logIn = (userData: userData, from: string = '/') => {
        dispatch(logInUser(userData));
        navigate(from, { replace: true });
    }
    const logOut = () => {
        dispatch(logOutUser());
        navigate('/');
    }

    const userHookData: userDataHookInterface = {
        ...userData,
        logIn,
        logOut
    }

    return userHookData;
}

export default useAuth;