angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quiz-api-gi3-env.eba-dfunr3qb.us-west-2.elasticbeanstalk.com/';

    return service;
}]);
