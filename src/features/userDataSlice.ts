import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export interface userData {
    name: string;
}

/**
 * @member isLoggedIn If a valid user is logged in, if set to false all other values are garbage and MUST not be used
 */
interface userSliceData extends userData {
    isLoggedIn: boolean;
}

const initialState: userSliceData = {
    isLoggedIn: false,
    name: ''
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        logInUser(state, actions: PayloadAction<userData>) {
            return {
                isLoggedIn: true,
                ...actions.payload
            }
        },

        logOutUser(state) {
            return initialState
        }

    }
})

export const { logInUser, logOutUser } = userDataSlice.actions;
export default userDataSlice.reducer;