function PlayerCtrl($scope) {
  $scope.name = 'Player';
  $scope.points = 20;

  $scope.addOne = function() {
    $scope.points += 1;
  }

  $scope.addFive = function() {
    $scope.points += 5;
  }

  $scope.subtractOne = function() {
    $scope.points -= 1;
  }

  $scope.subtractFive = function() {
    $scope.points -= 5;
  }

  $scope.$on('reset', function(){
    $scope.points = 20;
  })

}
