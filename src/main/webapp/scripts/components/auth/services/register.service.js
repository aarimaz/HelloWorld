'use strict';

angular.module('helloWorldApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


