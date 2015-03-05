'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.BoltCalcs
 * @description
 * # BoltCalcs
 * Service in the angularAppApp.
 */
angular.module('angularAppApp')
  .service('BoltCalcs', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.calc = function(var1, var2) {
      return parseFloat(var1) + parseFloat(var2);
    }
  });
