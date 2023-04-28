## 3/20/23:
Met group and completed code of conduct form. Brainstormed app ideas and presented ideas for feedback. Original plan was an app to give workout plans to users based on their fitness level which also featured a way for users to find workout buddies. Settled on creating an event-based fitness app after a talk with the instructors and amongst ourselves.

## 3/21/23:
Started wireframing application and discussed designs for homepage, user's main page, and event pages. Discussed map APIs.

## 3/22/23:
Continued wireframing and researching map APIs. Discussed data needed to geolocate events. Talked with Jimmy about maps as an MVP or stretch goal since we didn't have much of an idea on how to begin with it. Discussed app logo and design which was ultimately provided a great draft for one by Michael.

## 3/23/23:
Reviewed wireframes with Candice and discussed map APIs. Met with Ted and Tyler to discuss using Google Maps API which gave us confidence to try and add it for the project. Completed the first draft of our RESTful APIs. Discussed choosing a database and have not yet decided which one to use.

## 3/24/23:
Finished API design and plan to have Candice review it. After debating between databases, the team decided to use PostgreSQL. Set up GitLab repository, created an issue for logging in/out and decided to work on the entire backend coding as a group. We also finalized our changes to the first logo for ShapeShifters. The team decided to give ourselves a rule to strictly call it a day once 5 o'clock hits on Fridays.

## 3/27/23
Stacked our database with events and users, and began group coding on the backend. Set up PostgreSQL database and started coding authentication. Created exploration video detailing how to set up PostgreSQL database.

## 3/28/23
Worked on authentication with jwtdown FastAPI and made some changes to the users table (password column => hashed_password column). Struggled with signup, login, and logout functionality but eventually got it working with the help of Sophia.

## 3/29/23
Started working on seeding the database with event information. Created a new branch called "seed_database" with logic to seed the database, and talked to Candace about ways to seed the database. Made a database.py file and a db_script.py file with the logic to seed the database. Completed seeding the accounts database.

## 3/30/23
Continued to work on seeding the database with event information. Added a try-catch block to the users table to handle errors related to the unique constraint on all users in the table. Imported traceback to better understand errors and debug issues with fields on event tables. Merged seed_database branch.

## 4/3/23 - 4/4/23
Used VSCode's live-share feature to code and debug as a group. Created and listed events. Fixed code pushed/merged with an error in the database seeding script. Added authentication to protect our routes. Added functionality to add and remove an attendee from an event.

## 4/5/23
Added a zip_code column to the users table. Coded routes and queries to list events that the logged-in user is hosting or attending.

## 4/6/23
Used Radar API to get lat and lon for each event when it is created.

## 4/7/23
Today, the group worked to implement the map view for events. We started by creating a Google Maps API key and discussing how to integrate it into our app. We also worked on designing the UI for the map view and creating a separate page for it. We ran into some issues with the map not loading properly, so we will continue to work on this tomorrow.

## 4/8/234/9/23
Today, we continued to work on the map view for events. We were able to resolve the issues we had yesterday with the map not loading properly. We also added markers for each event on the map and created an info window to display information about each event when a marker is clicked. We still need to work on styling the info window, but overall we made good progress.
## 4/17/23
Group coding to begin front-end design. Fixed the database seeding script to take into account changes made to the events model. Planned work division for tomorrow, which will be working on modals and on the landing page.

## 4/18/23
Worked on creating a logged in and not logged in landing page. Added a button to event cards that will later dispatch the event details modal and a button to create an event that will later dispatch the create event modal.

## 4/19/23
Fixed backend code to correctly list events based on event id and host id. Created route and query for a list of events that the logged-in user is hosting or attending.

## 4/24/23
Group coding for the Your Events page. Created a global state that can be used for the EventsPageTabs and EventsPage components to conditionally load the list of events the user is attending or hosting and style the components.
