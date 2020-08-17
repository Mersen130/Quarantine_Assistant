# Quanrantine Assistant - Team 23

This is a web application designed for assisting people people to get through their quarantine period during this COVID-19 pandemic. The front-end part of this application is built with React and Bootstrap.
## Contributors and work distribution

- Qixin: Sidebar, Q&A, Questionnire, User Profile
- Yifei: Login & signup, Recommend activities, Dashboard

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
        - Takes: nothing
        - Action: locate the target user/logged in user and send back his/her info
        - Returns: on success: `[ Mongoose user document, [ array of posts and activities that the user interacted with ],  { userName: String, userType: String, userId: ObjectID }]` NOTE: the third element of the returning array is always the information of logged in user.
    2. `PATCH('/profile')`
        - When is called: user updates his/her own profile information
        - Takes: `{ userName: Optional String, gender: Optional String, age: Optional String, region: Optional String, selfDescription: Optional String }`
        - Action: if there is a user logged in, update his/her user document with `req.body`
        - Returns: on success: nothing
        
Yifei's Api

- User SignIn, SignUp, Reset pasword
    1. `Post(`/users`)`
        - When is called: when tester want to add an admin, it is the only way to add an admin. The user can not add an admin by singing up
        - Tasks: `{userName: required String, email:required String(must in the email formate), userType: required String (normal_user, doctor, admin), password:required String}`
        - Action: add a user into the database
        - Returns: `{currentUserName: userName, currentUserType: userType,"quarantineStartDate": Date}`
    2. `post("/users/signIn)"`
        - When is called: When the user signIn
        - Tasks:`{userName: required String, password: required String}`
        - Action: sign In the user if the user name and password is correct
        - Returns: `{ "currentUserName": "user", "currentUserType": userType,"quarantineStartDate": Date}`
     3. `post("/users/signUp)"`
         - When is called: when the user signin up
         - Tasks: `{userName: required String, email: required String, password: required String, docCertificate:optional String}`
         - Action: Sign up the user, if the user provide the docCertificate then the user will be signUped as a doctor, normal_user otherwise
         - Returns: `{"currentUserName": "user", "currentUserType": userType,"quarantineStartDate": Date)`
       4. `put("/users/resetPswd")`
          - When is called: when the user ask to reset the password
          - Tasks:`{email: required String, password: required String}`
          - Action: reset the user's password if the user provide a correct email address
          - Return: 
        5. `get("/users/check-session")`
            - When is called: every time run the app
            - Tasks:nothing
            - Action: check the cookie session see if there is a user logged in
            - Returns: `{"currentUserName": "user", "currentUserType": userType,"quarantineStartDate": Date)`
         6. `get("/users/logout")`
            - When is called: when the user clicked logout button
            - Tasks: nothing
            - Action: destroy the session cookie and route back to the signIn page
            - Retruns:nothing
 - Admin Dashboard
      1. `get("/normalUsers")`
            - When is called: In the userList that shows all the normalUser's info in the dashboard
            - Tasks: nothing
            - Action:get all the normal users in the database
            - Retruns: `{"normalUsers": [{ "posts": Array,"_id": objectID,"userName": userName, "userType": userType,"email": email,"password": password,"docCertificate": String,"quarantineStartDate": Date,"notifications": Array,"activities": [{activities}],}]}`
      2. `get("/doctors")`
            - When is called: In the userList that shows all the doctors's info in the dashboard
            - Tasks:nothing
            - Action:get all the doctors users in the database
            - Retruns:`{"doctors": [{ "posts": Array,"_id": objectID,"userName": userName, "userType": userType,"email": email,"password": password,"docCertificate": String,"quarantineStartDate": Date,"notifications": Array,"activities": [{activities}],}]}`
      3. `delete("/user/:id")`
            - When is called: When the admin wants to delete a user(normal_user, doctor), click the 'delete' button 
            - params.id: id of the user whihc the admin going to delete
            - Tasks:nothing
            - Action:delete the user form the database
            - Returns:nothing
            
- Activities
     1. `post("/users/activities/:id"`
           - When is called: When the user want to add the activity into his/her activities list, and click the 'add' button
           - params.id: it is the id of the activity that the user want to add
           - Tasks: nothing
           - Action:add the activity into the current user's  activites list, and this activity will not showing in the recommended activities list
           - Returns:`{"normalUsers": [{ "posts": Array,"_id": objectID,"userName": userName, "userType": userType,"email": email,"password": password,"docCertificate": String,"quarantineStartDate": Date,"notifications": Array,"activities": [{activities}],}]}`
      2. `delete("/users/activities/:id"`
            - When is called: When the current user want to delete an activity form their list, and click the 'Remove' button
            - params.id: it is the id of the activity that the user want to delete
            - Tasks: nothing
            - Action: delete an activity from user's activities list
            - Returns:`{"normalUsers": [{ "posts": Array,"_id": objectID,"userName": userName, "userType": userType,"email": email,"password": password,"docCertificate": String,"quarantineStartDate": Date,"notifications": Array,"activities": [{activities}],}]}`
      3. `post("/activities")`
            - When is called: add an activity into the database
            - Tasks: `{activityTile: required String, activityType: required String, activityDescription: required String, addTime: default Date.now()}`
            - Actions:add an activitiy into the database
            - Returns:`{"_id": ObjectId,"activityTile": String, "activityType": String,"activityDescription": String,"addTime": Date}`
       4. `get("/activities")`
            - When is called: get all activities form the database
            - Tasks: nothing
            - Actions: get all activities
            - Returns:`{activities:[`{"_id": ObjectId,"activityTile": String, "activityType": String,"activityDescription": String,"addTime": Date}`]}`
       5. `get("/users/activities")`
            - When is called: get all the activities of the current user
            - Tasks:nothing
            - Actions: get user's activities
            - Returns: `{activities:[{"_id": ObjectId,"activityTile": String, "activityType": String,"activityDescription": String,"addTime": Date}]`
- Tips & News in user dashboard
    1. `post("/tips")`
          - When is called: Adding tips into the database. Note: please add some tips into the datbase before run the app
          - Tasks:`{title:required String, content: required String, addTime:default Date.now()}`
          - Action: Add tips into the database
          - Returns:`{title:title, content: content, date:Date}`
    2. `get("/tips")`
        - when is called: in the normal_user dashbord, it will randomly return a tip form the database
        - Tasks: nothing
        - Actions:Randomly get a tip from the database
        - Retuns:`{tips:{title: title, content: content}`
    3. `post("/news")`
          - When is called: Adding news into the database. Note: please add some news into the datbase befro run the app
          - Tasks:`{title:required String, content: required String, date:default Date.now()}`
          - Action: Add news into the database
          - Returns:`{title:title, content: content, addTime:Date}`
    4. `get("/news")`
        - when is called: in the normal_user dashbord, it will randomly return a news in the database
        - Tasks: nothing
        - Actions:Randomly get a news from the database
        - Retuns:`{news:{title: title, content: content}`

          

## Login (`/`)

This page lets users log in the app. There are a few accounts you can login with for now:

- Regular user: (username, password) pairs
user, user
user1, user1

- Doctor: (username, password) pairs
doctor, doctor

- Admin (username, password) pairs
admin, admin


User , Doctor and Admin will be routed to the corresponding dashboard after login.

## Questionnaire (`/questionnaire/`)

If a user does not have an existing account, he will be directed to a simple questionnaire system to analyse whether he needs to take a 2 weeks quarantine. This page is only accessable to a new user, a new user must finish all questions before continuing. If it's deemed necessary for the user to take the quarantine, he will be directed to the signup page. If a user refuse to quarantine, the page will be directed to login page.

## Signup (`/signup/`)

This page lets users create an account, and will route to the normal user's dashboard page upon creation. Users can only create accounts in the type of normal_user and doctor, if the user provide the doctorCertificate No*, he/she will be created as a doctor.  admin account is setup by developers, it could not be created by users. Developers should use post("/uers") to create an admin.

## User profile

There are currently 4 available user profiles to view, they can be accessed either by clicking the profile photo on the sidebar or in the Q&A page.

- User self-view: This is the view where a regular user checks his own profile. The left card shows the name, gender, age, region, quarantine progress and bio of the user. The user can update his information by updating the fields in the forms on the right card. The changes will be reflected on the left card. The card at the very end of the page is displaying all posts and activities that he/she interacted in the past.

- Regular user view: This is the view where a user checks another regular user's profile. The card shows the name, gender, age, region, quarantine progress and description of the user. The card at the very end of the page is displaying all posts and activities that he/she interacted in the past.

- Doctor profile (`/DoctorProfile`): This is the view where a user checks a doctor user's profile. Apart from the necessary information, there's also a badge verifying the doctor identity and a field indicating the doctor's specialization.

- Admin profile (`/AdminProfile`): This is the view where a user checks an admin's profile. Apart from the necessary information, there's also a badge indicating this is an admin.

## Dashboard

There are 3 types of dashboards, namely user dashboard, doctor dashboard and admin dashboard.

### User dashboard (`/dashboard/`)

This is the entrypoint for a regular user. The title above the calendar shows the user's quarantine start date which is created when the user create an account. The calendar is dynamic, it shows the current date. The bottom half presents COVID-19 related tips and news. The tip and news on the dashboard is selected form the database randomly.

### Admin dasboard(`/dashboard/`)

The admin can get infos of all the normal users and doctors, by clicking the User card in the dashboard, the admin will be routed to the userList page which shows all the users with their userid, userName, email, date start quarantine, region. By clicking the Doctor card in the dashboard, the admin will be routed to the doctorList page which shows all the doctor with their userid, userName, email, doctorCertificate and region. Admin is able to delete any normal user and doctor by clicking the delete button besides the user.

### Doctor dashboard(`/dashboard/`)
The doctor dashboard shows a tip and a piece of news that related to the COVID-19. Both the tip and the news are randomly select from the database.


## Q&A

There are two views of the QA platform, for regular users and admins respectively.

### User view (`/qa`)
NOTE: doctors will share the same view as regular users.
- A user can post his/hers question on this page (with some optional tags). The newly posted question will be stacked on the top of the page.

- A user can `[like, unlike, reply]` to any post/reply, can delete only his posts/replies.

- A deleted post will be erased from the page, including its follow-ups, this move cannot be canceled. A deleted reply will not delete the entire post, instead, the deleted reply will be replaced with a phrase `"[content deleted by admin/author]"`.

- A user can search through all posts by specifying tags. Search can be undone by click the search button again.
- The default layout of posts are ordered from newest to oldest, this can always be changed by the dropdown on the right hand side of the page, where user can specify `"Newest"`-- ranked by time posted, `"top rated"` -- ranked by likes received, `"hottest"` -- ranked by number of replies.
- Users will receives notifications if their posts/replies are `[liked, deleted or replied]` in the navbar.
- A page can contain maximumly 10 posts, the rest of posts can be accessed throught the pagination tool at the bottom of the page.
- Users can click on any profile photos and redirect to that person's profile page
### Admin view (`/qaAdmin/`)

The admin view shares similar layout with user view, except that an admin cannot [like, post, reply], but can delete ANY posts/replies if the content is not appropriate.

## Activity Recommendations (`/Activities/`)

This is a page that lists user's activities and activities that recommended by the website. Users can remove the activities from their list and can add activities from recommended list to their list. Activities added in the user's list will not show in the recommend list anymore.

## Sidebar and Navbar (with notification center on top)

A user/admin can redirect to his own profile/Dashboard/Q&A/recomendation activities pages or log out through sidebar, or check the notifications through navbar.

## Notes and Pitfalls of this App

There exists many pitfalls and unexpected behaviours due to lack of labour.

- Pitfall 1: Do not use your everyday password since we didn't spend much effort on security.
- Pitfall 2: Users cannot reset their profile photos, the app has a handler that can let users upload a new photo, however it won't make any changes. We think *Cloudinary* would be time consuming to config.

I(Yifei Gao) already finished and commited the signIn, signUp and session check befroe the TA meeting, and it can be totally used to test credentials. All the other work for me is dashboard and activities which Qixin does not need to wait I finished to do his part. 

Thanks :)

