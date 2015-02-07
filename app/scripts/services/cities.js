'use strict';

/**
 * @ngdoc service
 * @name jallufinApp.Cities
 * @description
 * # Cities
 * Service in the jallufinApp.
 */
angular.module('jallufinApp')
  .service('Cities', function () {
   	return [
        {left:52, top:42,name:'oulu', amount:0},
        {left:52, top:31,name:'rovaniemi', amount:0},
        {left:64, top:59,name:'kuopio', amount:0},
        {left:51, top:68,name:'jyväskylä', amount:0},
        {left:44, top:73,name:'tampere', amount:0},
        {left:37, top:90,name:'turku', amount:0},
        {left:32, top:74,name:'pori', amount:0},
        {left:46, top:93,name:'helsinki', amount:0},
        {left:63, top:84,name:'lappeenranta', amount:0}
    ];

  });
