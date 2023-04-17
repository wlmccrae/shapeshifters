import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import loginReducer from '../features/auth/loginSlice'
import signupReducer from '../features/auth/signupSlice'
import newEventReducer  from '../features/events/newEventSlice'
import { authApi } from '../services/auth'
import { eventsApi } from '../services/events'

export const store = configureStore({
    reducer: {
        login:loginReducer,
        signup:signupReducer,
        newEvent: newEventReducer,
        [authApi.reducerPath]: authApi.reducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
    },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, eventsApi.middleware])
})

setupListeners(store.dispatch)