

import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { logInUser, logOutUser, userData } from "../features/userDataSlice";


const useAuth = (): [
    isLoggedIn: boolean,
    userData: userData,
    fn: (userData: userData) => void,
    fn: () => void] => {
    const { isLoggedIn, ...userData } = useAppSelector(state => state.userData);
    const dispatch = useAppDispatch();

    return [isLoggedIn, userData, (userData) => { dispatch(logInUser(userData)) }, () => { dispatch(logOutUser()) }];
}

export default useAuth;