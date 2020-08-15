# Quanrantine Assistant - Team 23

This is a web application designed for assisting people people to get through their quarantine period during this COVID-19 pandemic. The front-end part of this application is built with React and Bootstrap.

# Deployed Address: https://obscure-sands-70009.herokuapp.com/ | https://git.heroku.com/obscure-sands-70009.git

## Getting Started

Run the following command to install the dependencies:

`npm install`

After setup, run the following command to start the app:

`npm start`

## Structure

The main components of the front-end part of this application are (followed by its relative paths):

- Login (`/`)
- Signup (`/signup/`)
- Questionnaire (`/questionnaire/`)
- Dashboard (`/dashboard/`, `/admindashboard/`)
- Profiles (`/user1/`,`/user2/`,`/adminprofile/`,`/doctorprofile/`)
- Q&A (`/qa/`, `/qaAdmin/`)
- Activity Recommendations (`/Activities/`)
- Other miscs (Navbar, Sidebar etc.)

## Login (`/`)

This page lets users log in the app. There are 2 accounts you can login with for now:

- Regular user
<pre>userName: <b>user</b>, password: <b>user</b></pre></br>

- Admin

<pre>userName: <b>admin</b>, password: <b>admin</b></pre></br>

User and Admin will be routed to the corresponding dashboard after login.

## Questionnaire (`/questionnaire/`)

If a user does not have an existing account, he will be directed to a simple questionnaire system to analyse whether he needs to take a 2 weeks quarantine. This page is only accessable to a new user, a new user must finish all questions before continuing. If it's deemed necessary for the user to take the quarantine, he will be directed to the signup page. If a user refuse to quarantine, the page will be directed to login page.

## Signup (`/signup/`)

This page lets users create an account, and will route to the normal user's dashboard page upon creation. Users can only create accounts in the type of normal user, admin account and doctor account are setup by developers, it could not be created by users.

## User profile

There are currently 4 available user profiles to view, they can be accessed either by clicking the avatar on the sidebar or directly visiting the link.

Note that all data used in user views are now hard-coded. The information will be obtained from our user database in later development.

- User self-view (`/user1/`): This is the view where a regular user checks his own profile. The left card shows the name, gender, age, region, quarantine progress and description of the user. The user can update his information by updating the fields in the forms on the right card. The changes will be reflected on the left card.

- Regular user view (`/user2/`): This is the view where a user checks another regular user's profile. The card shows the name, gender, age, region, quarantine progress and description of the user.

- Doctor profile (`/doctorprofile/`): This is the view where a user checks a doctor user's profile. Apart from the necessary information, there's also a badge verifying the doctor identity and a field indicating the doctor's specialization.

- Admin profile (`/adminprofile/`): This is the view where a user checks an admin's profile. Apart from the necessary information, there's also a badge indicating this is an admin.

## Dashboard

There are two types of dashboards, namely user dashboard and admin dashboard.

Note that all data used in dashboards are now hard-coded. The date will be obtained from our user database in later development.

### User dashboard (`/dashboard/`)

This is the entrypoint for a regular user. The user can track his quarantine progress and check-in in the upper half of the page. The bottom half presents COVID-19 related tips and news. They are currently placeholder texts and will be pulled from external sources later.

### Admin dasboard(`/admindashboard/`)

This is the entrypoint for an admin. The admin can view the stats in the app in this page, e.g. the number of users/doctors/questions posted etc. Also it shows some user distribution data to help the admin analyze the situation and trend. Later the admin will be able to see the list of users by clicking the corresponding cards to carry out operations after we build our user database.

## Q&A

There are two views of the QA platform, for regular users and admins respectively.

### User view (`/qa/`)

- A user can post his/hers question on this page (with some optional tags). The newly posted question will be stacked on the top of the page.

- A user can `[like, unlike, reply]` to any post/reply, can delete only his posts/replies.

- A deleted post will be erased from the page, including its follow-ups, this move cannot be canceled. A deleted reply will not delete the entire post, instead, the deleted reply will be replaced with a phrase `"[content deleted by admin/author]"`.

- A user can search through all posts by specifying tags. Search can be undone by click the search button again.
- The default layout of posts are ordered from newest to oldest, this can always be changed by the dropdown on the right hand side of the page, where user can specify `"Newest"`-- ranked by time posted, `"top rated"` -- ranked by likes received, `"hottest"` -- ranked by number of replies.
- Users will receives notifications if their posts/replies are `[liked, deleted or replied]` in the navbar.
- A page can contain maximumly 10 posts, the rest of posts can be accessed throught the pagination tool at the bottom of the page.

### Admin view (`/qaAdmin/`)

The admin view shares similar layout with user view, except that an admin cannot [like, post, reply], but can delete ANY posts/replies if the content is not appropriate.

## Activity Recommendations (`/Activities/`)

This is a page that lists user's activities and activities that recommended by the website (of which the data will come from other source/API later). Users can remove the activities from their list and can add activities from recommended list to their list.

## Sidebar and Navbar (with notification center on top)

A user/admin can redirect to his own profile/Dashboard/Q&A/recomendation activities pages or log out through sidebar, or check the notifications through navbar.

## Note

As TA suggested, we choose to implement the abovementioned unique features of our app first. Time permitted, we will implement the additional `People Nearby` feature at a later stage.

## Contributors and work distribution

- Qixin: Sidebar, Q&A, Questionnire
- Yuqiu: User profile, Dashboard
- Yifei: Login & signup, Recommend activities

Thanks :)
