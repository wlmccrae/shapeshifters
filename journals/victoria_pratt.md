# Development Journal - Victoria Pratt

## Monday, 3/20/2023

We decided we wanted to design a fitness website called ShapeShifters,
that allows its users to find and join fitness events, create their
own events, and find other users (called ShapeMates) to work out with.
At first, we also wanted to generate workout plans for users based on
their individual needs, but the scope of the project was getting too
big, so we tabled that feature and may implement it as a stretch goal
later on.

## Tuesday, 3/21/2023

We worked on our project wireframe, designing how we wanted our pages
and modals to look.
We want to use a map API to show users events near them, and to show
points on a map where these events are located. We looked around at
different map APIs, but could not find one that met our needs that is free to use. We may choose to make this a stretch goal.

## Wednesday, 3/21/2023

We finished working on our project wireframe. There will be:

- Signup page
  - Redirects to login page
- Login page
  - Redirects to home page
- Home page
  - Displays a carousel of events
  - If user is logged in, events will be based on user's zip code
  - If user is not logged in, events will not be based on location
- Create an event modal
- Update an event modal
- An event details modal
- List page of events based on location
  - Displays a list of events as cards
- A "My Events" page
  - We would like to implement two clickable tabs on the page,
    one to show events hosting, and one to show events attending

## Thursday, 3/21/2023

We got advice from Ted and Tyler about using the Google Maps API, and it turns out we can use it for free, so we decided to use that and
not to make it a stretch goal. Added some finishing touches on our
wireframe, like buttons and form fields.

## Friday, 3/21/2023

We all joined a collab board on monday.com for our project, so that we
we can keep track of and update our tasks. We decided we wanted to use Postgres instead of MongoDB.
