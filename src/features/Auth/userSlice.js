import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from 'api/userApi';


// First, create the thunk
export const register = createAsyncThunk(
    'users/register', async (payload) => {
        // call API to register
        const data = await userApi.register(payload)

        // save data to local storage
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user)); // Neu ma no dang object thi dung JSON.stringify
        // return user data
        return data.user;
    },
)

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {
    },
    extraReducers: (builder) => {
        // [register.fulfilled] , register no chinh la ham tao o tren const register = createAsyncThunk...
        builder.addCase(register.fulfilled, (state, action) => {
            state.current = action.payload; // action payload no chinh la data.user o tren no tra ve
        })
    },

    // extraReducers: {
    //     // [register.fulfilled] , register no chinh la ham tao o tren const register = createAsyncThunk...
    //     [register.fulfilled]: (state, action) => {
    //         state.current = action.payload; // action payload no chinh la data.user o tren no tra ve
    //     }
    // }
});

const { reducer } = counterSlice;
export default reducer; //default export