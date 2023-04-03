# Journal: Emily Arai
## Week 1
Day 1, 3/20/23

Met group. Completed the group contract and started brainstorming app ideas. Presented ideas for instructors and got feedback. As a group, decided to do event-based fitness app.

Day 2, 3/21/23

Started wireframing our application. Worked on the homepage view when logged in and not logged in. Discussed designs for user's main page and event pages, both hosting and attending. Discussed possible map apis.

Day 3, 3/22/23

Continued to wireframe and research Map APIs. Decided to use modals for login, logout, signup, create event, and event details. Discussed what data we will need to collect from the users in order to geolocate events. Talked to Jimmy about having maps as a MVP or a stretch goal. Discussed logo and potential look of our app.

Day 4, 3/23/23
Added finishing touches with wireframing and reviewed our wireframe with Candice. Discussed map apis with Candice, who thought this could be an MVP goal. Discussed choosing a database with Candice but have not yet decided on which database to use. Met with Ted and Tyler to ask questions about using Google Maps api for our project. Completed first draft of our Restful APIs.

Day 5, 3/24/23
Uploaded RestfulAPIs and ShapeShifters WireFrame into docs. Discussed the pros and cons of MongoDB versus Postgres and decided to use a Postgres. Finalized our project logo. Decided to work on our project as a team for the backend and divy up the front end into smaller groups if tight on time.

## Week 2
Day 1, 3/27/23
Finished ResfulAPIs based on feedback from presentation. Set up database tables and ran an initial migration. Started to work on authentication with jwtdown FastAPI. Got stuck with AccountRepo(Queries) and decided to wait to finish this until after the lecture planned for the next day.

Day 2, 3/28/23
Worked on setting up authentication with jwtdown FastAPI. Debugged with Riley and made minor changes to the users table (password column => hashed_password column). Got stuck with the signup, login functionality. Debugged with Sophia and were able to get the signup, login, and logout working.

Day 3, 3/29/23
Started to set up event get and create routes. Realized that in order to test our logic with the route creation, we needed to seed our database to have data to work with. Started working on a new branch seed_database with logic to seed database. Talked to Candace about ways to seed database and made a database.py file with the database as well as a db_script.py file with the logic to seed the database. Completed seeding the accounts database.

Day 4, 3/30/23
Added a try catch block to the users table to handle errors related to the unique constraint on all users in the users table. Continued to work on seeding the database with the event information. Ran into issues with the fields on event tables. Imported traceback to get a better understanding of the error and were able to debug the issues. Made a merge request for the seed_database branch.