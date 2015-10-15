'use strict';

var lobbyApp = angular.module ('lobbyApp',[
'ngRoute',
'lobbyControllers',
'lobbyFilters',
'ui.bootstrap'
]);

lobbyApp.config(['$routeProvider',
  function($routeProvider)
  {
    $routeProvider.
      when('/main',{
       templateUrl:'main/game-list.html',
       controller: 'GameListCtrl'
      }).
      when('/main/:gameId',{
        templateUrl: 'main/game-detail.html',
        controller : 'GameDetailCtrl'
      }).
      when('/main/login/:userId',{
        templateUrl: 'main/game-login.html',
        controller : 'GameLoginCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);