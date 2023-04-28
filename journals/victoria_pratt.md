# Development Journal - Victoria Pratt

## Week 1

### Monday, 3/20/2023

We decided we wanted to design a fitness website called ShapeShifters, that allows its users to find and join fitness events, create their own events, and find other users (called ShapeMates) to work out with. At first, we also wanted to generate workout plans for users based on their individual needs, but the scope of the project was getting too big, so we tabled that feature and may implement it as a stretch goal later on.

### Tuesday, 3/21/2023

We worked on our project wireframe, designing how we wanted our pages and modals to look. We want to use a map API to show users events near them, and to show points on a map where these events are located. We looked around at different map APIs, but could not find one that met our needs that is free to use. We may choose to make this a stretch goal.

### Wednesday, 3/22/2023

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

### Thursday, 3/23/2023

We got advice from Ted and Tyler about using the Google Maps API, and it turns out we can use it for free, so we decided to use that and not to make it a stretch goal. Added some finishing touches on our wireframe, like buttons and form fields.

### Friday, 3/24/2023

We all joined a collab board on monday.com for our project, so that we we can keep track of and update our tasks. We decided we wanted to use Postgres instead of MongoDB.

## Week 2

### Monday, 3/27/2023

After we created our database tables, we worked for a bit on setting up the backend authentication, but then agreed it would be better to continue working on it after the authentication lecture tomorrow.

### Tuesday, 3/28/2023

After the lecture we finished working on the authentication.

### Wednesday, 3/29/2023

We worked on seeding the database with users and events to test our code.

### Thursday, 3/30/2023

We finished seeding the database and merged the code to main.

## Week 3

### Monday, 4/3/2023

We tried out using VSCode Live Share for the first time and it went well. We worked on the events routers and queries and got most of them done. We can't test our get_attendees function until we have attendees, we plan to do that tomorrow. I had issues with Docker not deleting containers, and had to completely uninstall and reinstall it.

### Tuesday, 4/4/23

Set up attendees routers and queries so that when a logged in user joins an event, a row is added to the attendees table (a list of all user-to-event relationships) that has the table row id, the user id, and the event id. When the user leaves the event's attendees list, the table row will be deleted using the row id. Tomorrow we will work on getting a list of all events associated with a user.

### Wednesday, 4/5/23

Finished backend code that can filter events by "attending" or "hosting." Next we will set up the 3rd party maps API. Met with Tyler to get advice about using the API, he also shared some good tips regarding how to approach the front-end design, and some mistakes to avoid (avoid slow loading times: compress high quality images, only load API data in once). Tomorrow we will begin implementing the maps API on the back-end.

### Thursday, 4/6/23

Finished implementing and testing the Radar API for our maps in the back-end. Trying to get started on the front-end but we are having issues installing Tailwind and getting it to work.

### Friday, 4/7/23

Got tailwind working, started working on the carousel for the homepage but ran into bugs. Putting that on the back burner for now.

## Week 5

### Monday, 4/17/23

Debugged create form for events, got event cards with images to display, started implementation of nav bar. Discussed separating into smaller groups, planning to split up the work tomorrow morning during stand-up.

### Tuesday, 4/18/23

Split into smaller groups to continue implementing the front end. Set up login and signup modals, a nav bar, and some of the landing page.

### Wednesday, 4/19/23

Added a modal for the event form, and got that and the login and signup modals to pop up when their respective links/buttons are clicked on the nav bar. Landing page now displays a carousel when logged out, and a list of all events as detailed event cards when logged in.

### Thursday, 4/20/23
We set up a modal to display an event's details when clicking the button on an event card.

## Week 6

### Monday, 4/24/23
Worked on the Your Events page to display events being attended and hosted depending on whtehr the "Attending" or "Hosting" tab is cicked. Made our logo in the nav bar clickable so it redirects to the landing page.

### Tuesday, 4/25/23
Worked on adding functionality to update event and delete an event. When a user views their hosted events, the event cards have an "Update" button and a "Delete" button. Able to delete events now, but the update event modal doesn't work yet. The modal comes up but it doesn't actually update the event.

## Wednesday, 4/26/23
Decided to hold off on implementing Update Events since it is a stretch goal and not a part of our MVP. Fixed console errors.

### Thursday, 4/27/23
Merged maps-api branch into main, spend quite a while handling the merge conficts but now the there are maps that display on clicking the "Show Map" button on an event card. Worked on unit tests. Fixed footer so it doesn't show up in the middle of the page anymore.

### Friday, 4/28/23
Changes to SQL tables to display host name for attending and hosting events, finished our unit tests, cleaned up code and removed unnecessary files.