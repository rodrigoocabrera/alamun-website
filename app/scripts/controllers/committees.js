'use strict';

/**
 * @ngdoc function
 * @name alamunWebsiteApp.controller:CommitteesCtrl
 * @description
 * # CommitteesCtrl
 * Controller of the alamunWebsiteApp
 */
function CommitteesCtrl($scope, $http, $env) {
    $scope.loading = true;
    $scope.committees = [];

    $scope.init = function() {
        $http.get($env.API + '/api/v1/alamun/2018/committees').then(function(response) {
            $scope.committees = response.data;
            $scope.loading = false;
        });
    };
}


function CommitteesDetailCtrl($scope, $http, $env, $state) {
    $scope.loading = true;
    $scope.committee = {};
    $scope.$api = $env.API;
    $scope.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

    $scope.init = function() {
        $http.get($env.API + '/api/v1/alamun/2018/committees/' + $state.params.slug).then(function(response) {
            $scope.committee = response.data;
            $scope.loading = false;
        });
    };
}

CommitteesCtrl.$inject = ['$scope','$http', '$env'];
CommitteesDetailCtrl.$inject = ['$scope','$http', '$env', '$state'];

var app = angular.module('alamunWebsiteApp');

app.controller('CommitteesCtrl', CommitteesCtrl)
    .controller('CommitteesDetailCtrl', CommitteesDetailCtrl);
