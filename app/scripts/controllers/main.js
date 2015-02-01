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
      {left:52, top:42,name:'oulu', amount:0, details: []},
      {left:52, top:31,name:'rovaniemi', amount:0, details: []},
      {left:64, top:59,name:'kuopio', amount:0, details: []},
      {left:51, top:68,name:'jyväskylä', amount:0, details: []},
      {left:44, top:73,name:'tampere', amount:0, details: []},
      {left:37, top:90,name:'turku', amount:0, details: []},
      {left:32, top:74,name:'pori', amount:0, details: []},
      {left:46, top:93,name:'helsinki', amount:0, details: []},
      {left:63, top:84,name:'lappeenranta', amount:0, details: []}
    ];

    _.each($scope.cities,function(city, id){
      Availability.get(city.name).then(function(data){
        $scope.cities[id].amount = _.reduce(data, function(memo, num){ return memo + parseInt(num.Amount); }, 0);
        _.each(data, function(store) {
          $scope.cities[id].details.push({
            amount: store.Amount,
            store: store.StoreName
          });
        });
      },function(){
        console.log('rrorz');
      });
    });

    $scope.getScale = function(amount) {
      if(!amount) {
        return 1;
      }
    
      //var total =  _.reduce($scope.cities, function(memo, num){ return memo + parseInt(num.amount); }, 0);
    };
    
    $scope.details = undefined;
    $scope.getDetails = function(cityName) {
      $scope.details = _.find($scope.cities, {name: cityName}).details;
    };
  });
