# Data Design for Roomie Hub

# Navigation
Represents the state of the navigation:
- page: either
  - dashboard
  - chores
  - food
  - calendar
- showing_sidebar: either showing or not_showing
- showing_group_modal: either showing or not_showing
- showing_profile_modal: either showing or not_showing
- ... all the other 'new thing' modals (the show thing modals should probably be in separate definitions for each screen's state but shhhhh 🤫)
- schedules_shown: set of members, minimum length 1

# Users
## User
A User is a structure representing one user containing:
- displayName: name of the user's choice that other users see
- email: **unique identifier** email address of the user  (could also be a phone number)
- password: user's account password  (don't store without at least hashing first)

## Group
A Group is a structure representing a group of members in a dorm containing:
- name: name of the group's choice visible to user's
- group_id: unique identifier for the group
- color: color that the group chooses to add some identity
- Leader: A User who has admin privileges (ability to remove users)
- Members (list) : A list, min length 1 (the leader), of Users in the group, including the leader 

# Chore List
## Chore

1. Start with abstract chores

// Abstract Chore (JS) -> OneTimeChore or RecurringChore

A OneTimeChore is a structure representing a chore to complete containing:
- chore_id: unique id
- title: title
- icon: icon to represent the task
- description: description of the task
- assignee: A User who the task is assigned to
- due_date: date the chore must be completed by

A RecurringChore is a structure representing a chore which recurs to complete containing a:
- chore_id: unique identifier for the chore
- title: title of the task
- icon: an icon to represent the task (can be added later, but probably a selection from a set of icon images we curate)
- description: description of the task
- assignee: A User who the task is assigned to
- repetition_cadence: A cadence is one of
  - Daily
  - Twice Weekly
  - Weekly
  - Bi-weekly
  - Monthly
- previous_completion_date: date representing last completion or creation date `this name sucks come up with a better one`

# Grocery List
A list of Grocery instances

## Grocery
A Grocery is a structure representing a grocery to purchase at the store:
- grocery_id: unique identifier for the grocery
- title: title of the grocery
- description: any details to add as well  //should a grocery just be a chore?

# Meal Plan
A list of meals

## Meal
A Meal is a structure representing one meal containing:
- meal_id: unique id for the meal item
- date: date the meal is going to be made for
- title: title of the meal
- description: any other details about the meal
- assignee: User responsible for the meal












# Dashboard
A list of Post instances

## Post
A Post is a structure representing a post on the dashboard which contains:
- post_id: unique id to represent the post
- poster: User who posted the post
- title: title of the post (optional)
- body: body of the post, either image, text, or both
- post-date: date the post was made
- shelf-life: count of time to be available for (number of hours, days, weeks, months)
- read_receipts: list of users who have seen the post







# Calendars
For now: a list of Class Schedules 

## Class Schedule
A Class Schedule represents a schedule of classes for one user:
- user: the user the schedule represents
- days_of_week: a day of the week containing:
  - title: either M, T, W, T, F, S, S
  - blocks: list of Blocks where a block has
    - block_id: unique id for the schedule block
    - class_title: string of title
    - start_time: time class starts
    - end_time: time class ends

## Wake Up Times
- probably not gonna have time to code these, so I'm not gonna model the data haha...😭






Thing to think about: is everything just a chore with some special attributes?
