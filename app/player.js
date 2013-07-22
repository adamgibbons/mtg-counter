function PlayerCtrl($scope) {
  $scope.name = 'Player';
  $scope.points = 1;

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

}


// function TodoCtrl($scope) {
//   $scope.todos = [
//     {text:'learn angular', done:true},
//     {text:'build an angular app', done:false}];
 
//   $scope.addTodo = function() {
//     $scope.todos.push({text:$scope.todoText, done:false});
//     $scope.todoText = '';
//   };
 
//   $scope.remaining = function() {
//     var count = 0;
//     angular.forEach($scope.todos, function(todo) {
//       count += todo.done ? 0 : 1;
//     });
//     return count;
//   };
 
//   $scope.archive = function() {
//     var oldTodos = $scope.todos;
//     $scope.todos = [];
//     angular.forEach(oldTodos, function(todo) {
//       if (!todo.done) $scope.todos.push(todo);
//     });
//   };
// }