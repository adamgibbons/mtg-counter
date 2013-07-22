function PlayerCtrl($scope) {
  $scope.editing = false;
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

  $scope.save = function() {
    $scope.editing = false;
  }

  $scope.edit = function() {
    $scope.editing = true;
  }

  $scope.$on('reset', function(){
    $scope.points = 20;
  })

}
