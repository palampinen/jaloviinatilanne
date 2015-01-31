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

    // inhabitants taken from http://fi.wikipedia.org/wiki/Luettelo_Suomen_kunnista_v%C3%A4kiluvun_mukaan
    // 31.1.2015
    $scope.cities = [
      {left:52, top:42,name:'oulu', amount:0, inhabitants: 196305},
      {left:52, top:31,name:'rovaniemi', amount:0, inhabitants: 61568},
      {left:64, top:59,name:'kuopio', amount:0, inhabitants: 107607},
      {left:51, top:68,name:'jyväskylä', amount:0, inhabitants: 135761},
      {left:44, top:73,name:'tampere', amount:0, inhabitants: 223148},
      {left:37, top:90,name:'turku', amount:0, inhabitants: 184112},
      {left:32, top:74,name:'pori', amount:0, inhabitants: 83528},
      {left:46, top:93,name:'helsinki', amount:0, inhabitants: 622240},
      {left:63, top:84,name:'lappeenranta', amount:0, inhabitants: 72830}

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

   $scope.inhabitantsPerBottle = null;
   $scope.displayAmountPerCapita = function(city) {
     $scope.inhabitantsPerBottle = city.inhabitants / city.amount;
   }
   $scope.resetBottlesPerCapita = function() {
     $scope.inhabitantsPerBottle = null;
   }
  });
