import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';


// First, create the thunk
export const register = createAsyncThunk(
    'users/register', async (payload) => {
        // call API to register
        const data = await userApi.register(payload)

        // save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user)); // Neu ma no dang object thi dung JSON.stringify
        // return user data
        return data.user;
    },
);

// First, create the thunk
export const login = createAsyncThunk(
    'users/login', async (payload) => {
        // call API to register
        const data = await userApi.login(payload)

        // save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user)); // Neu ma no dang object thi dung JSON.stringify
        // return user data
        return data.user;
    },
);


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
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.current = action.payload; // action payload no chinh la data.user o tren no tra ve
            })

            .addCase(login.fulfilled, (state, action) => {
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