'use strict';

describe('Book Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockBook, MockPerson;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockBook = jasmine.createSpy('MockBook');
        MockPerson = jasmine.createSpy('MockPerson');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Book': MockBook,
            'Person': MockPerson
        };
        createController = function() {
            $injector.get('$controller')("BookDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'helloWorldApp:bookUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
