'use strict';

angular
  .module('myApp', ['ngRoute'])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      templateUrl: '../about.html'
    }).when('/articles', {
      templateUrl: '../articles.html'
    }).when('/portfolio', {
      templateUrl: '../portfolio.html'
    }).when('/play', {
      templateUrl: '../services.html'
    }).when('/contact', {
      templateUrl: '../contact.html'
    }).when('/article/{id}', {
      templateUrl: '../article_detail.html'
    }).otherwise({
        redirectTo: "/"
    });
  })
  .controller("mainController", function ($scope, $location) {

});
