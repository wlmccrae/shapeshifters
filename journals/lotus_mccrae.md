20 - 21 March 2023
Worked on wire framing as a group. We started with two project ideas: a workout plan and a workout event planner. Then we decided on doing the workout event planner.

22 - 23 March 2023
Developed and completed API planning for our project.

24 March 2023
Discussed what database we would use (PostGres) and set up our Gitlab repository. Will do coding as a group for the entire backend. Fridays we will break after the last attendance token to give our brains a rest.

27 March 2023
Group coding. Set up Postgresql database alongside exploration video detailing how to do it. Began coding authentication the same way.

28 March 2023
Group coding. Worked on authentication until 8pm.

29 March 2023
Group coding. Started creating route and query for a list of events, but switched to creating a route and query for creating an event first, so we will be able to test getting the list.

30 March 2023
Successfully seeds database with users and events.

3-4 April 2023
Using VSCode's live-share feature to code and debug as a group. We can create and list events. Fixed code pushed/merged with an error in the database seeding script.

Added authentication to protect our routes. Added functionality to add and remove an attendee from an event.

5 April 2023
Added zip_code column to users table. Coded routes and queries to list events the logged in user is hosting or attending.

6 April 2023
Using Radar API to get lat and lon for each event when it is created.

17 April 2023
Group coding to begin front-end design.
Fixed database seeding script to take into account changes made to the events model.
Planned work division for tomorrow: working on modals and on landing page.

18 April 2023
Created logged in landing page and not logged in landing page.

19 April 2023
Fixed backend code to correctly list events based on event id and host id. With our original query both the events and users tables returned a column named ‘id’, and I thought that may be confusing event_record_to_dict when it tried ‘if column.name in event_fields’. It seemed to always choose the ‘id’ column from users instead of the ‘id’ column from events. So I changed our query to only get the first_name and last_name columns from the users table. Then in event_record_to_dict I added the host_id from the event to the host dictionary before returning event. I'm far more familiar with SQL queries now.

Added button to event cards that will later dispatch the event details modal and to create event button that will later dispatch the create event modal.

24 April 2023
Group coding the Your Events page. To conditionally load the list of events the user is attending or hosting and style the components, we created a global state that can be used for the EventsPageTabs and EventsPage components.

25 April 2023
Used Redux to store whether the user is looking at events they attending or events they are hosting. The EventsPageTabs and EventsPage components read that state and display event cards based on that state.

26 April 2023
Group debugging the Redux tags that would allow the EventsPage to hot reload when an event is created or deleted. Group debugging the Update feature for events; after speaking with the instructors we decided to make this a stretch goal. Spent time as a group refactoring our code to get rid of console errors. Instructors also recommended making updating an event its own page rather than doing it in a modal and using React Hooks instead of Redux, in order to simplify things for us.

27 April 2023
Group debugging.
- Used Tailwind CSS to style the divs on EventPage to get the Footer to stay at the bottom of the page. We had a lot of unneeded divs, and deleting those fixed the issue.
- We implemented CSS styling to make the text look more consistent across the site and added padding under the buttons on the event cards. We also moved the description of each event to the EventDetails modal so the cards are less busy.

Plan for Tomorrow:
- Fix our queries so we can display the host name on the event details modal.
- Run all code through linters.
- Make sure all unnecessary print statements are removed from front and back end code.
- SUBMIT

28 April 2023
We added a conditional statement in EventsPage to load the LandingPage when the user logs out. Now we are ready to submit!
