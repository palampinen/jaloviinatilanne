'use strict';

/**
 * @ngdoc function
 * @name jallufinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jallufinApp
 */
 angular.module('jallufinApp')
 .controller('MainCtrl', function ($scope,Availability,History,Population,Chart,Cities) {

    //Chart
    $scope.chart = Chart;

    $scope.history = History;

    $scope.cities = Cities;

    var getFormattedDate = function() {
        var d = new Date();
        return d.getDate() +'-'+(d.getMonth()+1)+'-'+d.getFullYear();
    }

    var getCityData = function() {
     _.each($scope.cities,function(city, id){

        var formattedDate = getFormattedDate();
        Availability.get(city.name).then(function(data){

           $scope.cities[id].amount = _.reduce(data, function(memo, num){ return memo + parseInt(num.Amount); }, 0);
           $scope.cities[id].percentage = $scope.total ? Math.round(($scope.cities[id].amount / $scope.total) * 1000) / 10 : 0;
           $scope.cities[id].perInhabitant =  Math.round(Population.city(city.name) / ($scope.cities[id].amount * 500) * 10) / 10; // ml


           // Save to history
           History.$ref().child(city.name).child(formattedDate).set({ amount:$scope.cities[id].amount },function(){
            console.log('Amount is saved in Firebase for city ',city.name);
           });

        },function(data){
            console.log('rrorz')
        })

     })
    }

    // Get total jallus
    $scope.total = 0;
    var getTotal = function(callback) {
      var cb = callback || angular.noop;
      Availability.get('all').then(function(data){
        $scope.total = _.reduce(data, function(memo, num){ return memo + parseInt(num.Amount); }, 0);
        cb();
      },function(data){
          console.log('too few?')
      })

  }


  getTotal(getCityData);

  $scope.active = -1;
  $scope.activate = function(id) {
      $scope.active = $scope.active!==id ? id : -1;
  }


});
