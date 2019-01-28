# Feedback Loop - using Redux

This project allows the user to enter feedback for an instructor in three categories and enter a comment. The feedback can then be submitted and the user can press a button to enter feedback again, hence the feedback loop.

## Built With

React
Redux
React-router
Axios
Moment.js
Sweetalert
Material-ui

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

The following programs are necessary to run 'Feedback Loop - using Redux':

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL] (https://www.postgresql.org/download/)


### Installing

Steps to get the development environment running.

1. Download this project from GitHub.
2. `npm install`
3. `npm run server`
4. `npm run client`

### Completed Features

High level list of items completed.

- [x] Add a page for the user to submit feedback for feelings. The value will be stored in redux.
- [x] The next page will allow the user to rate comprehension, also stored in redux.
- [x] Another page is needed for rating support and the value assigned is sent to the redux store.
- [x] Last page for feedback allows the user to enter comments.
- [x] Summary page with a button to submit the data to a database.
- [x] Admin page that allows an administrator to see feedback.
- [x] Create an option on the admin page to flag for review.


### Next Steps

Features that you would like to add at some point in the future.

- [ ] Better styling of the pages with material-ui.
- [ ] Fix the sort by date after a user clicks on the flag for review option.
- [ ] Add a stepper to show feedback progress.
- [ ] Add the ability to use the arrow icons on FeedbackReview.js to go back to that feedback form.
- [ ] Slim down the code, many of the forms could be reduced and some items could be made into components.
- [ ] Deploy using Heroku.


## Authors

* Kye Berkeland


## Acknowledgments

* Thanks to Prime Digital Academy.