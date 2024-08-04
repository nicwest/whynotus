import {createSlice,createAsyncThunk, Middleware} from '@reduxjs/toolkit'
import { createClient, SupabaseClient, Session, User } from '@supabase/supabase-js'
import {AppDispatch} from '../../store'

interface SupabaseState {
    user: User | undefined
}

const projectURL = process.env.REACT_APP_SUPABASE_PROJECT_URL;
const apiKey = process.env.REACT_APP_SUPABASE_API_KEY;

if(!projectURL) {
    throw Error('Supabase Project URL not set')
}

if(!apiKey) {
    throw Error('Supabase API Key not set')
}

const client : SupabaseClient = createClient(
    projectURL, 
    apiKey,
)

if(!client) {
    throw Error('Supabase Client failed to initiate')
}

const initialState : SupabaseState = {
    user: undefined,
}


interface supabaseSessionEvent {
    event: string
    session: Session | null
}
const sessionEvent = createAsyncThunk(
    'supabase/sessionEvent',
    async (event: supabaseSessionEvent) => {
        return event.session?.user
    }
)

export const supabaseMiddleware : Middleware = storeApi => {
    const dispatch : AppDispatch = storeApi.dispatch
    client.auth.onAuthStateChange((event: string, session: Session | null) => {
        dispatch(sessionEvent({event, session}))
    })

    return next => action => {
        return next(action)
    }
}

const supabaseSlice = createSlice({
    name: "supabase",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(sessionEvent.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

export const supabaseReducer = supabaseSlice.reducer;
