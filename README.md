# team23 Quanrantine Assistant

## Set Up
To start the app, please run following code to set up.<br/>
`npm install`
after set up successfully, please run following code to start the app:<br/>
`npm start`

## Login
The page let user to log in. There are 2 accounts that can log in with:
>`userName: **user**, password: **user**` (lead to normal user's front end)
>`userName: **admin**, password: **admin**`(leadn to admin user's front end)

## signup
The page let user to create an account, the page will route to the normal user's dashboard page once create successfully. Users can only create accounts in the type of normal user, admin account is setted up by developers, it could not be created by users.

## Questionnaire
A simple questionnaire system to analyse whether a new user need to take a 2 weeks quarantine. This page is only accessable to a new user, a new user must finish all questions before continuing. If a user refuse to quarantine, the page will be redirected to login page.

## User profile
TODO

## Dashboard
TODO

## Q&A
A user can post his/hers question on this page (with some optional tags). The newly posted question will be stacked on the top of the page. 
A user can [like, unlike, reply] to any post/reply, can delete only his posts/replies. 
A deleted post will be erased from the page, including its follow-ups, this move cannot be canceled. A deleted reply will not delete the entire post, instead, the deleted reply will be replaced with a phrase "[content deleted by admin/author]". 
A user can search through all posts by specifying tags. Search can be undone by click the search button again.
The default layout of posts are ordered from newest to oldest, this can always be changed by the dropdown on the right hand side of the page, where user can specify "Newest" -- ranked by time posted, "top rated" -- ranked by likes received, "hottest" -- ranked by number of replies.
Users will receives notifications if their posts/replies are [liked, deleted or replied].
A page can contain maximumly 10 posts, the rest of posts can be accessed throught the pagination tool at the bottom of the page.
An admin cannot [like, post, reply], but can delete ANY posts/replies if the content is not appropriate.

## Recommend activities
A page that lists  user's activities and activities that recommended by the website(which the data will come from other source/API). Users can remove the activities from their list and can add activities from recommended list to their list.

## Sidebar (with notification center on top)
A user/admin can redirect to Dashboard/Q&A/recomendation activities pages or log out through sidebar.

## Contributors and work distribution
Qixin: Sidebar, Q&A, Questionnire
Yuqiu: User profile, Dashboard
Yifei: Login & signup, Recommend activities