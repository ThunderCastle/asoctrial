(function() {
      'use strict';

angular.module('futbxl', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home',{
          url:'/',
          templateUrl: '../views/home.html',
          // controller:
        })

        .state('players',{
          url:'/players',
          templateUrl: '../views/playerRout.html',
          // controller:
        })

        .state('teams',{
          url:'/teams',
          templateUrl: '../views/teamRoute.html',
          // controller:
        })
        //
        .state('stadiums',{
          url:'/stadiums',
          templateUrl: '../views/stadiumsRoute.html',
          // controller:
        })

        .state('terms', {
          url:'/terms',
          templateUrl: '../views/terms.html'
        })

        .state('privacy', {
          url:'/privacy',
          templateUrl:'../views/privacy.html'
        })

        .state('contact', {
          url:'/contact',
          templateUrl: '../views/contact.html'
        })

        .state('signin', {
          url: '/signin',
          templateUrl: '../views/signin.html'
        })

        .state('signup', {
          url: '/signup',
          templateUrl: '../views/signup.html'
        })

        .state('about', {
          url: '/about',
          templateUrl: '../views/about.html'
        })
  })

}());
