'use strict';

/**
 * @ngdoc function
 * @name jallufinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jallufinApp
 */
angular.module('jallufinApp')
  .controller('MainCtrl', function ($scope,Availability) {
    

    $scope.cities = [
      {left:52, top:42,name:'oulu', amount:0},
      {left:52, top:31,name:'rovaniemi', amount:0},
      {left:64, top:59,name:'kuopio', amount:0},
      {left:51, top:68,name:'jyväskylä', amount:0},
      {left:44, top:73,name:'tampere', amount:0},
      {left:37, top:90,name:'turku', amount:0},
      {left:32, top:74,name:'pori', amount:0},
      {left:46, top:93,name:'helsinki', amount:0},
      {left:63, top:84,name:'lappeenranta', amount:0},
      {left:62, top:49,name:'kajaani', amount:0}

    ]

   _.each($scope.cities,function(city, id){

    Availability.get(city.name).then(function(data){

     $scope.cities[id].amount = _.reduce(data, function(memo, num){ return memo + parseInt(num.Amount); }, 0)
    },function(data){
        console.log('rrorz')
    })

   })

   $scope.getScale = function(amount) {
      if(!amount) return 1;

      var total =  _.reduce($scope.cities, function(memo, num){ return memo + parseInt(num.amount); }, 0);

      

   }
    

  });
