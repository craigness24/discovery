'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:CalcCtrl
 * @description
 * # CalcCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('CalcCtrl', function($scope) {
    $scope.sum = 'nada';
    $scope.calc = function() {
      $scope.sum = parseFloat($scope.var1) + parseFloat($scope.var2);
    }
  });
