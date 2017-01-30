var app = angular.module('alamunWebsiteApp');

app.factory('errorInterceptor', ['$q', '$injector',
    function errorInterceptor($q, $injector) {
        return {
            responseError: function(res) {
                if (res.status == 404) {
                    $injector.get('$state').go('app.404');
                } else { //Unhandled error occurred
                    $injector.get("ngNotify").set("Oops! Something went wrong. Please refresh this page.", 'error');
                }
                return $q.reject(res);
            }
        }
    }
]);