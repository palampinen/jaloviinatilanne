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
      {left:63, top:84,name:'lappeenranta', amount:0}

    ]

  var getCities = function() {
   _.each($scope.cities,function(city, id){

    Availability.get(city.name).then(function(data){

     $scope.cities[id].amount = _.reduce(data, function(memo, num){ return memo + parseInt(num.Amount); }, 0);
     $scope.cities[id].percentage = $scope.total ? Math.round(($scope.cities[id].amount / $scope.total) * 1000) / 10 : 0;

    },function(data){
        console.log('rrorz')
    })

   })
  }

    // Get total jallus
    $scope.total = 0;
    var getTotal = function() {
      Availability.get('all').then(function(data){
        $scope.total = _.reduce(data, function(memo, num){ return memo + parseInt(num.Amount); }, 0);
        getCities();
      },function(data){
          console.log('too few?')
      })

    }

    getTotal();

    $scope.active = '';
    $scope.activate = function(id) {
      $scope.active = id;
    }

    
  });
