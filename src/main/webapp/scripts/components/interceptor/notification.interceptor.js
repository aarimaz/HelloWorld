 'use strict';

angular.module('helloWorldApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-helloWorldApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-helloWorldApp-params')});
                }
                return response;
            }
        };
    });
