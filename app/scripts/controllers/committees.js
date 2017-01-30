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
        $scope.loadCommittees();
    };

    $scope.loadCommittees = function() {
        $http.get($env.API + '/api/v1/alamun/2017/committees').then(function(response) {
            $scope.committees = response.data;
            $scope.loading = false;
        });
    };
}

CommitteesCtrl.$inject = ['$scope','$http', '$env'];

var app = angular.module('alamunWebsiteApp');

app.controller('CommitteesCtrl', CommitteesCtrl);
