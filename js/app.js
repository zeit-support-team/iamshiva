'use strict';

angular
  .module('myApp', ['ngRoute'])
  .config(function ($routeProvider) {
             
    $routeProvider.when('/', {
      templateUrl: '../about.html'
    }).when('/article', {
      templateUrl: '../articles.html'
    }).otherwise({
        redirectTo: "/"
    });
  })
  .controller("mainController", function ($scope, $location) {
     
});