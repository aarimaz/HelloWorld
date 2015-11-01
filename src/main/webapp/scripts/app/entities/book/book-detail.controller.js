'use strict';

angular.module('helloWorldApp')
    .controller('BookDetailController', function ($scope, $rootScope, $stateParams, entity, Book, Person) {
        $scope.book = entity;
        $scope.load = function (id) {
            Book.get({id: id}, function(result) {
                $scope.book = result;
            });
        };
        var unsubscribe = $rootScope.$on('helloWorldApp:bookUpdate', function(event, result) {
            $scope.book = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
