Developing an Angular application with NodeJS


Development log
===============

1. Install NodeJS from http://nodejs.org
2. npm install -g karma karma-cli bower
3. npm init - creates the project definition
4. bower init - creates the bower configuration
5. create a .bowerrc file with
  { "directory" : "public/lib" }
6. karma init - create karma definition
  * mocha test framework
7. Create the first test: spec/workerCtrl.spec.js
8. bower install --save angular-mocks angular
9. npm install --save-dev karma-mocha karma-chai
