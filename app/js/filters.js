'use strict';

/* Filters */

angular.module('lobbyFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
