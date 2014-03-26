Developing an Angular application with NodeJS

Using the project:
==================
1. Install NodeJS, Growl + Growlnotify, Postgres
2. npm install -g karma karma-cli bower nodemon mocha
3. npm install
4. bower install
5. karma start - starts the test runner (and locks the window)
6. nodemon server/index.js - starts the server (and locks the window)
7. In pgAdmin, add new role 'application' with password 'secret'
   and database 'bookings' owned by 'application'
8. mocha --watch --growl server/spec



Development log
===============

1. Install NodeJS from http://nodejs.org,
   Growl and growlnotify from http://www.growlforwindows.com/gfw/
2. npm install -g karma karma-cli bower
3. npm init - creates the project definition
4. bower init - creates the bower configuration
5. create a .bowerrc file with
  { "directory" : "public/lib" }
6. karma init - create karma definition
  * mocha test framework
7. Create the first test: spec/workerCtrl.spec.js
8. bower install --save angular-mocks angular
9. npm install --save-dev karma-mocha karma-chai karma-growl-reporter
9. Create the application with the first controller: 
   public/scripts/app.js
9. npm install --save express
9. Create the server app under server/index.js
9. npm install -g nodemon
9. nodemon server/index.js
9. bower install --save bootstrap
9. Copy the starter template to public/index.html and update paths
9. Add a section for the workers controller to public/index.html
9. Add save function to workerCtrl and index.html
9. bower install --save toastr to include messages
9. Add toastr to index.html and karma.conf.js
9. Add post router to server/index.js
9. Extract server/workerService.js

Database
--------
1. npm install -g mocha
2. Create server/spec/workerService.spec.js
3. npm install --save-dev expect.js
4. mocha --watch --growl server/spec
5. Install Postgresql from http://www.postgresql.org/download/
6. npm install --save sequelize
7. In pgAdmin add a new role with name 'application' and password 'secret'.
   Create a new database 'bookings' owned by 'application'
8. Update the server/spec/workerService.spec.js to connect with sequelize

