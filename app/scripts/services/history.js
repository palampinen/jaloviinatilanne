'use strict';

/**
 * @ngdoc service
 * @name jallufinApp.History
 * @description
 * # History
 * Service in the jallufinApp.
 */
angular.module('jallufinApp')
  .factory('History', function ($firebase, fbURL) {

    return $firebase(new Firebase(fbURL+'history'));

})
