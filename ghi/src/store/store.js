import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import loginReducer from '../features/auth/loginSlice'
import signupReducer from '../features/auth/signupSlice'
import newEventReducer  from '../features/events/newEventSlice'
import eventDetailReducer from '../features/events/eventDetailSlice'
import addAttendeeReducer from '../features/attendees/addAttendeeSlice'
import eventsPageReducer from '../features/events/eventsPageSlice'
import eventUpdateReducer from '../features/events/eventUpdateSlice'

import { authApi } from '../services/auth'
import { eventsApi } from '../services/events'
import { attendeesApi } from '../services/attendees'

export const store = configureStore({
    reducer: {
        login:loginReducer,
        signup:signupReducer,
        newEvent: newEventReducer,
        eventDetail: eventDetailReducer,
        addAttendee: addAttendeeReducer,
        eventsPage: eventsPageReducer,
        eventUpdate: eventUpdateReducer,
        [authApi.reducerPath]: authApi.reducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
        [attendeesApi.reducerPath]: attendeesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        authApi.middleware,
        eventsApi.middleware,
        attendeesApi.middleware
    ])
})

setupListeners(store.dispatch)
