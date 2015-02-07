'use strict';

/**
 * @ngdoc service
 * @name jallufinApp.Population
 * @description
 * # Population
 * Service in the jallufinApp.
 */
angular.module('jallufinApp')
  .factory('Population', function () {
    

    // TODO: get these from some DB (Wikipedia?)
    var population = {
			oulu: 196305,
			rovaniemi: 61568,
			kuopio: 107607,
			jyväskylä: 135761,
			tampere: 223148,
			turku: 184112,
			pori: 83528,
			helsinki: 622240,
			lappeenranta: 7283
    }

    return {
    	city: function(id) {
    		return population[id]
    	}
    }


  });
