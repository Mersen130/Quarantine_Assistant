# TODOs:

All: unify layout style

## Yuqiu:

- Redesign views of profile and dashboard, reduce dependency on framework

- Include doctor:
  - Doctor dashboard —— notifications of questions and posts related to them

- Add feature:
Admin is able to view all users' profiles and manage users, such as add, delete/modify users etc.


## Yifei:

- Redesign views of activities(important) and SignIn (make the view sketch of SignIn more connect with other pages)

- Add a doctor account that will direct to doctor's page after user logged in 

- Redirect "Already have an account" to the correct page(SignIn: /)

## Qixin:
- put a doctor sign when doctor replies

- add edit post and upload pictures features

- link to profile pages when click on profile pictures.


## if we have time(people nearby):
- Users are able to share their quarantine progress and activity progress on the
platform
- Users are able to view other users progress and leave their comments on the
platform


#Update 2020-07-29:

## MangoDB:

### UserInfo:
- userId(unique), username, email, password, userType(doctor, normal_user, admin), docCertificateNo(optional), (logInStatus), age(optional),description(optional), postId(user's posts and posts that user replied), userActivieId(users activities),quarantineProgress(normal_user only)

### QA postings: 
- postId(unique), poster(userId), posting_content, postingTime, postingTags, NoLikes, replier, replyContent, NolikesofEachReply

### Notification:
- notificationId, notificationContent, notificationStatus(checked, unchecked)

### Activies:
- activtiesId, activitiesTitle, activitiesType, activitiesDescription

## ToDo:

### Qixin:
- Userprofile: add user's postings section
- Q&A: reply and posting

### Yifei Gao:
- Dashboard:restyle qurantine progress
- SigUp, Login, resetPswd (email nev)


