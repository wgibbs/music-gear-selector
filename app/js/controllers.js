var musicgearApp = angular.module('musicgearApp', []);

musicgearApp.controller('MusicItemCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('items.json').success(function(data) {
    $scope.filters = {};
    $scope.items = data;
  });
}]);

