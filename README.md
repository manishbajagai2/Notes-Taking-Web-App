# To-Do-App

This is a To Do web based application. Here, a user can record his/her day-to-day activities or plan out the work according to the list that is made out using this app. Suitable for gathering information anytime, anywhere online.

## How to run the app

1. Either fork or download the app and open the folder in the CLI. To edit or see the code, I preferably open the folder in the Atom editor.
2. A local machine with node, nodemon, mongodb, git, heroku already installed is used. We can install them respectively from their official website.
3. Next, install all the dependencies required in this project using 'npm i' or 'npm install' (without single quote) in the terminal or prompt.
4. The entry point of the project is app.js. So start the web server, by running local commands, for which opening the web browser (preferably the chrome browser), the app will be served at http://localhost:3000
5. Use nodemon app.js in the CLI to run the project; next time the app runs, the editted code is saved, and content is refreshed in the web browser for updation.

## How to use

1. Go to the url and type /add at the end to open up a portal to create new task.
2. When the task is created, the description is truncated, so click to read more to see entire content. 
3. In the home page again, go to the end of the url and type /list to see only the titles of the tasks created.
4. You can create as many tasks as you like.
5. If you want to delete a particular task, just clicked in the checkbox provided and then a fresh tasks list is served.

## User stories

- A user can narrate their thought on how things can be done
- A user can filter out the unnecessary tasks by deleting them

## Features

- Hosted app, so purely online available to everyone through the link
- Backend support in filling up the information at the time the task is created
- Storage of tasks created
- Deletion of tasks in one click
- Beautiful interface

## Dependencies

- Node
- Express
- body-parser
- lodash
- mongoose
- Bootstrap

## What the app looks like

![alt text](https://github.com/manishbajagai2/To-Do-App/blob/main/interface.png)
