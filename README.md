# Quanrantine Assistant - Team 23

This is a web application designed for assisting people people to get through their quarantine period during this COVID-19 pandemic. The front-end part of this application is built with React and Bootstrap.

## Deployed Address: https://obscure-sands-70009.herokuapp.com/
NOTE: Behaviour of this app is undefined if using browsers other than Chrome.

## Getting Started 
##### (follow this section if you want to run this app locally)

Run the following command to install the dependencies and build components:

`npm install`
`cd client/quarantine`
`npm install`
`npm run build`

After setup, run the following command to start the app:

`cd ../../`
`node server.js`
open `localhost:5000` in Chrome

## Routes

##### UI routes (what user can see in the browser tab) of this application are (followed by its relative paths):

- Signin (`/`, `/SignIn`)
- Signup (`/SignUp`)
- Reset (`/Reset`)
- Questionnaire (`/questionnaire`)
- Dashboard (`/dashboard`, `/admindashboard`, `doctordashboard`)
- Profiles (`/UserProfile`,`/DoctorProfile`, `/AdminProfile`)
- Q&A (`/qa`, `/qaAdmin`)
- Activity Recommendations (`/Activities`)
- Userlist (`/userlist`)
- Other miscs (Navbar, Sidebar etc.)

##### Back-end routes (server API):
Qixin's API:  
For the ease of testing, you can imitate there's a user logged in in the cookies by: comment out line38-line51 and uncomment line52-line55 in `server.js`. If you are running locally, remember to replace line52 with a valid user ObjectID in your own local database.

- Q&A section
    1. `GET('/post')`
        - When is called: user loads `/qa` or `/qaAdmin` page
        - Takes: nothing
        - Action: if there is a valid user logged in, send back all of the posts in the database and an object of user information
        - Returns: on success: `[ [Post Mongoose Documents], { userName: String, userType: String, userId: ObjectID } ]`
    2. `POST('/post')`
        - When is called: user sends a new post
        - Takes: `{ contents: [String], times: [String of Dates], likes: [String of Numbers], tags: [String] }`, NOTE: these arrays should be parallel arrays(i.e. they have the same length)
        - Action: if there is a valid user logged in, add the post to the database, and make this post belongs to the current user.
        - Returns: on success: `{ currentPost: ObjectID of the newly added post }`
    3. `PATCH('/reply/:postId')`
        - When is called: user leaves a reply to any post
        - params.postId: the ObjectID of the target post
        - Takes: `{ posterId: [interacters' ObjectID of this post], posterType: [interacters' types of this post], names: [interacters' names of this post], contents: [String], times: [String of Dates], likes: [String of Numbers], tags: [String] }`, NOTE 1: these arrays should be parallel arrays(i.e. they have the same length). NOTE 2: we stored the post and its replies in an array. For example, a post has 2 replies, then its data structure will be `postContent: [mainPost, reply1, reply2]`
        - Action: if there's a valid user logged in, update the target post with fields provided in request. Also, if this is the first time that the logged in user interacts with this post, make this post belongs to the logged in user as well.
        - Returns: on success: `{ posterType: userType of the logged in user, posterId: ObjectID of the logged in user }`
    4. `PATCH('/post/like/:postId')`
        - When is called: user clickes the like button on any reply/post
        - params.postId: the ObjectID of the target post
        - Takes: `{ contentIndex: Number, likeNum: Number }`
        - Action: if there is a valid user logged in, increase the target post's `<req.body.contentIndex>`th content by `<req.body.likeNum>`. 
        - Returns: on success: nothing
    5. `DELETE('/post/:postId')`
        - When is called: user deletes his/her own post
        - params.postId: the ObjectID of the target post
        - Takes: nothing
        - Action: if there is a valid user logged in, remove the target post from existance, and remove the reference to this post from this user's mongoose document.
        - Returns: on success: nothing
    6. `PATCH('/reply/delete/:postId')`
        - When is called: user deletes his/her own reply
        - params.postId: the ObjectID of the target post
        - Takes: `{ contentIndex: Number }`
        - Action: replace the target post's `<req.body.contentIndex>th` content with `"content deleted by admin/author"`
        - returns: on success: nothing
- Profile section
    1. `GET('/profile/:id')`
        - When is called: user loads `/UserProfile` or `DoctorProfile` or `AdminProfile` page
        - params&#46;id: the ObjectID of the target user, or `me` if the user is loading his own profile page.
        - Takes: 

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
