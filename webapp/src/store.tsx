import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {sayReducer} from './features/say/slices'
import {supabaseReducer, supabaseMiddleware} from './features/supabase/slices'

const rootReducer = combineReducers({
        say: sayReducer,
        supabase: supabaseReducer,
    })

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(supabaseMiddleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch


