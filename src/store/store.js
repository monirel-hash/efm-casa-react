import { configureStore } from '@reduxjs/toolkit'
import paysSlice from './paysSlice'

export const store = configureStore({
    reducer : {
        pays : paysSlice,
    }
})


