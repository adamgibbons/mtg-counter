function PlayersCtrl($scope) {

  $scope.reset = function() {
    $scope.$broadcast('reset');
  }

}
