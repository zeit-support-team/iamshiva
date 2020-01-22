'use strict';

angular
  .module('myApp', ['ngRoute'])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      templateUrl: '../about'
    }).when('/articles', {
      templateUrl: '../articles'
    }).when('/portfolio', {
      templateUrl: '../portfolio'
    }).when('/play', {
      templateUrl: '../services'
    }).when('/contact', {
      templateUrl: '../contact'
    }).when('/article/{id}', {
      templateUrl: '../article_detail'
    }).otherwise({
        redirectTo: "/"
    });
  })
  .controller("mainController", function ($scope, $location) {
      // $scope.pathurl = $location.path();
      $scope.pathurl = function(){
        return $location.path(); 
      } 
});

let ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
   {
     return (true)
   }
   return (false)
 }