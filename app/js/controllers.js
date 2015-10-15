'use strict';

/* Controllers */
var lobbyControllers =  angular.module ('lobbyControllers', []);

lobbyControllers.controller('GameListCtrl', ['$scope', '$http',   
  function($scope,$http){
    $http.get('games/games.json').success(function(data){
      $scope.games = data;
    });
  }]);

lobbyControllers.controller ('GameDetailCtrl', ['$scope' , '$routeParams', '$http',
  function($scope, $routeParams, $http){
    $http.get('games/' + $routeParams.gameId + '.json').success(function(data){
      $scope.game = data;
    });

    $scope.playDemo = function(){      
      window.location.href =  $scope.game.url4Fun;
    } 

    $scope.playReal = function(){      
      window.location.href = "#/main/login/:userId";
    } 

  }]);


lobbyControllers.controller ('GameLoginCtrl', ['$scope' , '$routeParams', '$http',
  function($scope, $routeParams, $http){

  }]);

lobbyControllers.controller ('CarouselDemoCtrl', ['$scope' , '$http',
  function($scope,  $http){
    $http.get('games/carousel.json').success(function(data){
      $scope.slides = data;
    });
    $scope.myInterval = 3000;
  }]);


lobbyControllers.controller ('DropdownCtrl', ['$scope' , '$log',
  function($scope,  $log){
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
  }]);