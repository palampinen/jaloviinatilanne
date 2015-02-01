'use strict';

/**
 * @ngdoc service
 * @name jallufinApp.availability
 * @description
 * # availability
 * Service in the jallufinApp.
 */
angular.module('jallufinApp')
  .value('corsURL', '//cors-anywhere.herokuapp.com/')
  .value('APIURL',  'http://www.alko.fi/api/product/Availability?productId=000706&language=fi&cityId=')
  .factory('Availability', function ($http, $q,corsURL,APIURL) {
    

      return {
        get: function(param) {
            var deferred = $q.defer();
            $http.get(corsURL+APIURL+param,{
            
            })
            .success(function(data){
              deferred.resolve(data);
            });
              return deferred.promise;
        }
      };


  });
