Developing an Angular application with NodeJS


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

