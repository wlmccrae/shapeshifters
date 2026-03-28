# Redux in ShapeShifters

## What is Redux?

Redux is a state management library that provides a single, centralized store for all application state. Instead of each component managing its own local state in isolation, Redux gives you one predictable place to store and update shared data.

The core idea:
- **Store** — a single JavaScript object holding the entire application state
- **Actions** — plain objects that describe *what happened* (e.g., `{ type: "login/showLoginModal" }`)
- **Reducers** — pure functions that take the current state and an action, and return the next state
- **Dispatch** — the mechanism for sending actions to the store
- **Selectors** — functions (or inline expressions) that read specific pieces of state from the store

This project uses **Redux Toolkit (RTK)**, the official, opinionated way to write Redux. RTK reduces boilerplate by providing `createSlice` (which generates actions and reducers together) and `configureStore` (which wires everything up).

---

## The Store

**File:** [ghi/src/store/store.js](ghi/src/store/store.js)

The store is created with `configureStore` and is made available to the entire React app via a `<Provider store={store}>` wrapper in [ghi/src/index.js](ghi/src/index.js).

The store combines **8 slice reducers** (for local UI state) and **3 RTK Query API reducers** (for server/cached data):

```
store
├── login             — login form fields and modal visibility
├── signup            — signup form fields and modal visibility
├── newEvent          — create-event form fields and modal visibility
├── editEvent         — edit-event form fields, target event ID, and modal visibility
├── eventDetail       — event detail modal visibility and selected event ID
├── eventsPage        — which tab is active ("attending" or "hosting")
├── eventMap          — map modal visibility and map center coordinates
├── addAttendee       — current attendee ID when joining an event
├── authApi           — RTK Query cache for account/session endpoints
├── eventsApi         — RTK Query cache for events endpoints
└── attendeesApi      — RTK Query cache for attendees endpoints
```

---

## Slice Reducers

Each slice manages a focused piece of UI state. They are created with `createSlice`, which automatically generates action creators alongside the reducer.

### `login` — [ghi/src/features/auth/loginSlice.js](ghi/src/features/auth/loginSlice.js)

Manages the login form and its modal.

```js
{
  fields: { username: "", password: "" },
  errorMessage: null,
  loginModal: false
}
```

| Action | Effect |
|---|---|
| `handleEmailChange` | Updates `fields.username` |
| `handlePasswordChange` | Updates `fields.password` |
| `showLoginModal` | Sets `loginModal: true` |
| `hideLoginModal` | Sets `loginModal: false` |
| `reset` | Resets all state to initial values |

---

### `signup` — [ghi/src/features/auth/signupSlice.js](ghi/src/features/auth/signupSlice.js)

Manages the signup form and its modal.

```js
{
  fields: {
    first_name: "", last_name: "", email: "",
    zip_code: "", hashed_password: "", password_confirmation: ""
  },
  errorMessage: null,
  signupModal: false
}
```

| Action | Effect |
|---|---|
| `handleFirstNameChange` | Updates `fields.first_name` |
| `handleLastNameChange` | Updates `fields.last_name` |
| `handleEmailChange` | Updates `fields.email` |
| `handleZipCodeChange` | Updates `fields.zip_code` |
| `handlePasswordChange` | Updates `fields.hashed_password` |
| `handlePasswordConfirmationChange` | Updates `fields.password_confirmation` |
| `showSignupModal` / `hideSignupModal` | Controls modal visibility |
| `error` | Sets `errorMessage` |
| `reset` | Resets all state to initial values |

---

### `newEvent` — [ghi/src/features/events/newEventSlice.js](ghi/src/features/events/newEventSlice.js)

Manages the create-event form and its modal.

```js
{
  fields: {
    event_name: "", event_type: "", address_line1: "", address_line2: "",
    city: "", state: "", zip_code: "", country: "",
    image_url: "", start_datetime: "", end_datetime: "", event_description: ""
  },
  errorMessage: null,
  createEventModal: false
}
```

Each form field has a corresponding `handle*Change` action. `showCreateEventModal` / `hideCreateEventModal` control the modal. `reset` clears all fields.

---

### `editEvent` — [ghi/src/features/events/editEventSlice.js](ghi/src/features/events/editEventSlice.js)

Manages the edit-event form, the ID of the event being edited, and the modal.

```js
{
  fields: { /* same fields as newEvent */ },
  eventId: null,
  editEventModal: false
}
```

| Action | Effect |
|---|---|
| `loadEvent(event)` | Populates `fields` and `eventId` from an existing event object |
| `handle*Change` actions | Update individual form fields |
| `hideEditEventModal` | Closes the modal |
| `resetEdit` | Clears fields and event ID |

---

### `eventDetail` — [ghi/src/features/events/eventDetailSlice.js](ghi/src/features/events/eventDetailSlice.js)

Tracks which event's detail modal is open and which event ID to show.

```js
{
  errorMessage: null,
  eventDetailModal: false,
  eventId: 0
}
```

| Action | Effect |
|---|---|
| `showEventDetailModal` | Opens the detail modal |
| `hideEventDetailModal` | Closes the detail modal |
| `getEventId(id)` | Stores the selected event's ID |

---

### `eventsPage` — [ghi/src/features/events/eventsPageSlice.js](ghi/src/features/events/eventsPageSlice.js)

Tracks which tab the user is viewing on the events page.

```js
{
  errorMessage: null,
  userRole: "attending"   // or "hosting"
}
```

| Action | Effect |
|---|---|
| `showAttendingEvents` | Sets `userRole: "attending"` |
| `showHostingEvents` | Sets `userRole: "hosting"` |

---

### `eventMap` — [ghi/src/features/events/eventMapSlice.js](ghi/src/features/events/eventMapSlice.js)

Manages the map modal and the coordinates it centers on.

```js
{
  center: { lat: -3.745, lng: -38.523 },
  eventMapModal: false,
  errorMessage: null
}
```

| Action | Effect |
|---|---|
| `showEventMapModal` | Opens the map modal |
| `hideEventMapModal` | Closes the map modal |
| `setLat(lat)` | Updates `center.lat` |
| `setLng(lng)` | Updates `center.lng` |

---

### `addAttendee` — [ghi/src/features/attendees/addAttendeeSlice.js](ghi/src/features/attendees/addAttendeeSlice.js)

Stores the current user's attendee ID when joining an event.

```js
{
  attendeeId: 0
}
```

| Action | Effect |
|---|---|
| `getAttendeeId(id)` | Stores the attendee ID |
| `reset` | Resets to `0` |

---

## RTK Query API Slices

RTK Query handles all server communication. It automatically manages loading states, caching, and cache invalidation — no manual `fetch` + `useState` boilerplate required.

### `authApi` — [ghi/src/services/auth.js](ghi/src/services/auth.js)

Handles account and session endpoints.

| Hook | Method | Endpoint | Description |
|---|---|---|---|
| `useGetAccountQuery()` | GET | `/token` | Fetches the currently logged-in account |
| `useLoginMutation()` | POST | `/token` | Logs in (form data: username + password) |
| `useLogoutMutation()` | DELETE | `/token` | Logs out the current session |
| `useSignupMutation()` | POST | `/api/accounts` | Creates a new account |

Login and logout mutations invalidate the `"Account"` cache tag, which automatically triggers a re-fetch of `getAccount` in any component using it.

---

### `eventsApi` — [ghi/src/services/events.js](ghi/src/services/events.js)

Handles all event CRUD operations.

| Hook | Method | Endpoint | Description |
|---|---|---|---|
| `useGetEventsQuery()` | GET | `/api/events` | Fetches all events |
| `useGetAttendingEventsQuery()` | GET | `/api/events/attending` | Fetches events the user is attending |
| `useGetHostingEventsQuery()` | GET | `/api/events/hosting` | Fetches events the user is hosting |
| `useGetEventQuery(id)` | GET | `/api/events/{id}` | Fetches a single event |
| `useLazyGetEventQuery()` | GET | `/api/events/{id}` | Lazily fetches a single event on demand |
| `useCreateEventMutation()` | POST | `/api/events` | Creates a new event |
| `useUpdateEventMutation()` | PUT | `/api/events/{id}` | Updates an existing event |
| `useDeleteEventMutation()` | DELETE | `/api/events/{id}` | Deletes an event |

Create, update, and delete mutations use tag-based invalidation to automatically refresh the events list in any component that subscribes to it.

---

### `attendeesApi` — [ghi/src/services/attendees.js](ghi/src/services/attendees.js)

Handles attendee operations.

| Hook | Method | Endpoint | Description |
|---|---|---|---|
| `useAddAttendeeMutation()` | POST | `/api/events/{id}/attendees` | Adds the current user as an attendee to an event |

---

## How Components Use the Store

Components interact with Redux through two hooks and RTK Query hooks.

### Reading state — `useSelector`

```js
const loginModal = useSelector((state) => state.login.loginModal);
const userRole = useSelector((state) => state.eventsPage.userRole);
```

### Writing state — `useDispatch`

```js
const dispatch = useDispatch();

dispatch(showLoginModal());
dispatch(getEventId(event.id));
dispatch(setLat(event.lat));
```

### Fetching and mutating server data — RTK Query hooks

```js
// Automatically fetches on mount, returns { data, isLoading, error }
const { data: events } = useGetEventsQuery();

// Returns a trigger function and result state
const [deleteEvent] = useDeleteEventMutation();
await deleteEvent(eventId);
```

---

## Data Flow Example: Opening an Event Detail Modal

1. User clicks an event card in [EventCard.js](ghi/src/components/EventCard.js)
2. Component dispatches `getEventId(event.id)` → stored in `state.eventDetail.eventId`
3. Component dispatches `showEventDetailModal()` → sets `state.eventDetail.eventDetailModal: true`
4. [EventDetails.js](ghi/src/components/EventDetails.js) selects `state.eventDetail.eventDetailModal` and renders the modal
5. Modal uses `useLazyGetEventQuery()` to fetch full event data using the ID from `state.eventDetail.eventId`

## Data Flow Example: Editing an Event

1. User clicks "Edit" on an event card
2. Component dispatches `loadEvent(event)` → populates `state.editEvent.fields` and `state.editEvent.eventId`
3. [EditEventModal.js](ghi/src/components/EditEventModal.js) selects `state.editEvent` and renders pre-filled form fields
4. Each keystroke dispatches a `handle*Change` action → updates the relevant field in `state.editEvent.fields`
5. On submit, component calls `updateEvent({ id, fields })` mutation
6. RTK Query sends the PUT request, then invalidates the `"Events"` cache tags
7. Any component using `useGetEventsQuery` or related hooks automatically re-fetches

---

## Summary

| Concern | Managed by |
|---|---|
| Form field values | Slice reducers (`login`, `signup`, `newEvent`, `editEvent`) |
| Modal open/closed state | Slice reducers (each feature slice) |
| Active tab / view mode | `eventsPage` slice |
| Map coordinates | `eventMap` slice |
| Server data & caching | RTK Query (`authApi`, `eventsApi`, `attendeesApi`) |
