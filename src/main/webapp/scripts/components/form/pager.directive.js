/* globals $ */
'use strict';

angular.module('helloWorldApp')
    .directive('helloWorldAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
