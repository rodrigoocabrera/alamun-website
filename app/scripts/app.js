'use strict';

/**
 * @ngdoc overview
 * @name alamunWebsiteApp
 * @description
 * # alamunWebsiteApp
 *
 * Main module of the application.
 */

function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('app', {
      abstract: true,
      views: {
        header: {
          templateUrl: 'views/header.html',
          controller: 'MainCtrl'
        },
        '': {
          template: '<ui-view></ui-view>'
        }
      }
    }).state('app.home', {
      url: "/",
      templateUrl: "views/home.html",
    }).state('app.404', {
      url: "/404",
      template: "<h3>404</h3>",
    }).state('app.committees', {
      url: "/committees",
      controller: 'CommitteesCtrl',
      templateUrl: "views/committees.html",
    });
}

var app = angular.module('alamunWebsiteApp', [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'alamun.config'
]);

config.$inject = ['$stateProvider','$urlRouterProvider'];

app.config(config);