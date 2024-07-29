import {createSlice} from '@reduxjs/toolkit'

interface SayState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | undefined;
}

const initialState: SayState = {
    status: 'idle',
    error: undefined,
}

const saySlice = createSlice({
    name: "say",
    initialState: initialState,
    reducers: {},
})

export const sayReducer = saySlice.reducer;
