# NoSQL: Workout Tracker

In this assignemtn I have created a workout tracker. It was necessary to create Mongo a database with a Mongoose schema and handle routes with Express.

## What Does This App Do?

* As a user, one can view, create, and track daily workouts. The user can log multiple exercises in a workout on a given day. It is possible to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the app should be able to track distance traveled.
( Front end has a problem in that the maping of const durations =   data.map(({ totalDuration }) => totalDuration); does not work properly. TA instructed me not to fix it and that they would make a note that it should not affect my grade.) 

The user should be able to:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

  * View the total duration of each workout from the past seven workouts on the `stats` page.

