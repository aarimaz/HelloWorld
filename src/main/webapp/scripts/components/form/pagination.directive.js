/* globals $ */
'use strict';

angular.module('helloWorldApp')
    .directive('helloWorldAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
