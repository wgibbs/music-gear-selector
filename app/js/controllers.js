var musicgearApp = angular.module('musicgearApp', []);

musicgearApp.controller('MusicItemCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('items.json').success(function(data) {
    $scope.items = data;
    $scope.filters = {};
    
    $scope.qty = [];
      $scope.addItem = function(){
        $scope.qty.push(this.item);
      }
  });
}]);

