function DelegatesCtrl($scope, $window, $state) {
    $scope.items = [
        {title: "DEBATING PROCEDURE", state: 'app.procedure', image: '/images/debating-procedure.jpg'},
        {title: "SAMPLE POSITION PAPER", link: '/files/position-paper.pdf', image: '/images/position-paper.jpg'},
        {title: "DELEGATE FEE ($300 MXN)", image: '/images/fees.jpg'},
        {title: "SCHEDULE & AGENDA", image: '/images/schedule.jpg', state: 'app.schedule'}
    ];

    $scope.url = function(url, state) {
        if (url) $window.open(url);
        if (state) $state.go(state);
    }
}

DelegatesCtrl.$inject = ['$scope', '$window', '$state'];

var app = angular.module('alamunWebsiteApp');

app.controller('DelegatesCtrl', DelegatesCtrl);
