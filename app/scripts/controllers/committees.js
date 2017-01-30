'use strict';

/**
 * @ngdoc function
 * @name alamunWebsiteApp.controller:CommitteesCtrl
 * @description
 * # CommitteesCtrl
 * Controller of the alamunWebsiteApp
 */
function CommitteesCtrl($scope, $http) {
    $scope.loading = true;
    $scope.init = function() {

    };
}

CommitteesCtrl.$inject = ['$scope','$http'];

var app = angular.module('alamunWebsiteApp');

app.controller('CommitteesCtrl', CommitteesCtrl);
