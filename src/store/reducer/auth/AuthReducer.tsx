// store/authReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: string | null;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<string>) {
            state.user = action.payload;
            state.error = null;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
