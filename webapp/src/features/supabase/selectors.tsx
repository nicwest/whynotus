import {RootState} from '../../store'
import {User} from '@supabase/supabase-js'

export const getUser = (state: RootState) : User | undefined  => {
    return state.supabase.user
}
