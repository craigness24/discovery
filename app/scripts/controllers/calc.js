'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:CalcCtrl
 * @description
 * # CalcCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('CalcCtrl', function($scope, BoltCalcs) {
    $scope.calc = function() {
      $scope.sum = BoltCalcs.calc($scope.var1, $scope.var2);
    }
  });
