import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import loginReducer from '../features/auth/loginSlice'
import { authApi } from '../services/auth'

export const store = configureStore({
    reducer: {
        login:loginReducer,
        [authApi.reducerPath]: authApi.reducer
    },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware])
})

setupListeners(store.dispatch)