

import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { logInUser, logOutUser, userData, userSliceData } from "../features/userDataSlice";
interface userDataHookInterface extends userSliceData {
    logIn: (userData: userData) => void,
    logOut: () => void
}

/**
 * @returns 
 * @property isLoggedin: boolean -> weather the current user is logged in, if false all other props are set to default value(garbage).
 * @property email: string -> email (logged in) | '' (logged out)
 * @property firstName: string -> firstName (logged in) | '' (logged out)
 * @property lastName: string -> lastName (logged in) | '' (logged out)
 * @function login(userData) -> logs in user (stores supplied userData to recux store)
 * @function logout() -> logs out user (removes stored data with defualt values)
 */
const useAuth = (): userDataHookInterface => {

    let userData = useAppSelector(state => state.userData);

    const dispatch = useAppDispatch();

    const logIn = (userData: userData) => { dispatch(logInUser(userData)) }
    const logOut = () => { dispatch(logOutUser()) }

    const userHookData: userDataHookInterface = {
        ...userData,
        logIn,
        logOut
    }

    return userHookData;
}

export default useAuth;