Module 4 Code Challenge: Poesy
==============================

Welcome to Poesy, where your poetry masterpieces come to life! Our old front-end team laid down the foundations for our app, but it looks like they forgot all the functionality! Yikes!

Your job will be to make our app work according to the following specifications.

## Setup instructions

Open up 2 terminals and in one, please run `json-server --watch db.json` and in the other run `npm install && npm start`. This should get your servers up and running!

## Deliverables

1. Display poems from the database

Our back-end team reports that our API is good to go! Make a GET request to `http://localhost:3000/poems` to fetch poem data. Use this data to render `Poem` components in the `PoemContainer`!

2. Log in / log out

Use the `LoginForm` to capture a user's username and then display this username in the `UserHeader`

Right now we are displaying both the `LoginForm` and the `UserHeader`, but only one should be showing at any given time - `UserHeader` should only display when a user has been logged in, and `LoginForm` should only display when there is no user. Clicking the log out button on `UserHeader` should clear the user's username and cause the `LoginForm` to reappear.

3. Post poems

There is a form for creating poems inside `NewPoemForm`. When a user submit's a poem, it should be added to the list of poems on the right. You can use the username provided during log in to give the poem its `author` attribute. A user must not be able to do this when they are not logged in!

*Note*: No persistence required - just get it to show up on the page.

4. Mark poems as read

When a poem is clicked, change the color of that poem. You can use the `color` CSS value which has been provided to you in the `Poem` component to change the color. Clicking it again should change it back to unread (colored black).

## Bonus Deliverables
Please only attempt these if you have finished all the other deliverables and have spare time! You may want to commit your code at this point.

5. Poem persistence

When a poem is created, persist it to the `db.json` in addition to displaying it on the page

6. Favorite poems

Add a second `PoemContainer` component that will be used to display favorites. Add a "Like" button to each `Poem` component. When clicked, that poem will be added to a list of favorites and be displayed in the second `PoemContainer`. 

*Note*: don't worry about styling for this!
