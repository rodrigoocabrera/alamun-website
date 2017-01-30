'use strict';

/**
 * @ngdoc overview
 * @name alamunWebsiteApp
 * @description
 * # alamunWebsiteApp
 *
 * Main module of the application.
 */

function config($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/404');

    $httpProvider.interceptors.push('errorInterceptor');

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
    }).state('app.committees_detail', {
      url: "/committees/{slug}",
      controller: 'CommitteesDetailCtrl',
      templateUrl: "views/committees-detail.html",
    }).state('app.contact', {
      url: "/contact",
      controller: 'ContactCtrl',
      templateUrl: "views/contact.html",
    });
}

var app = angular.module('alamunWebsiteApp', [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'alamun.config',
    'ngNotify',
    'ngMap'
]);

config.$inject = ['$stateProvider','$urlRouterProvider', '$httpProvider'];

app.config(config);
