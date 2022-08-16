import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            email: null,
            displayName: null,
            photoURL: null
        }
    },
    reducers: {
        setUserStatus(state, action) {
            state.user = action.payload
        }
    }
})

export const authActions = authSlice.actions

export default authSlice