function PlayersCtrl($scope) {
  $scope.gameCount = 1;

  incrementGameCount = function() {
    $scope.gameCount += 1;
  }

  $scope.reset = function() {
    $scope.$broadcast('reset');
    incrementGameCount();
  }

}
