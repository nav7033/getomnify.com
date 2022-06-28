# getomnify.com

# Problem Statement

Build a microservice with functionality to create timed schedules and display them on a calendar.

## Tech Stack

- LAMP Stack - Use Laravel Framework, Mysql DB
- Frontend - JS Framework/Library of you choice.
- Bitbucket - for version control

The task is distributed across 4 different Sections.

### Page 1 : Signup / Login

Build a user authentication forms for Signup, Login. A new use must enter 

- First name
- Last name
- Email
- Password

On submission of the form create a user in your database, and redirect to a home page.

In case of **Login page** accept email and password to login and redirect user to home page.

### Page 2 :  Scheduled Events

**Frontend**

Build a form to accept the following properties

- Name <string>
- Description <text>
- Start time: use date-time picker for selecting value
- End Time: use date-time picker for selecting value
- Day of the week : multi-select dropdown

**Backend**

DB : Create  `events` and `schedules` table in your DB.

**Functionality**

Store the values by creating an event entry in your `events` table. 

Also, create recurring scheduled events for next 90 days.

***For Example :*** 

On 4th Jan 2021 (monday), if a user is creating an event with following properties  

- Name - Weekly Meeting
- Description - Sync-up with engineering team.
- Start time - 17:00
- End time - 18:00
- Day of the Week - Friday

Based on the above params, the dates of Fridays for next 90 days (till 4th Apr 2021) will be 8th 15th 22nd 29th of Jan, 5th 12th 19th 26th Feb, 5th 12th 19th 26th Mar and 2nd Apr. 

Thus, on successful submission of form write a code that also create schedules on the above mentioned dates at the event's start and end time.

### Page 3 : Home page

Use a calendar plugin of your choice, and add it to the page. All the schedules created by uses must appear on his/her calendar. Make sure that user must see only their schedules.

### Submission

On completion submit your project and also share your git repo with ***anmol@getomnify.com & nikhil.deshpande@getomnify.com***

### NOTE

- Make sure you use git regularly as the version control for the project.
- Be creative and impress us with your design skills & coding discipline.
- Brownie Points for hosting the project on a server.

Feel free to reach out on ***tech@getomnify*** for any queries/doubts.

All the best!

