angular.module('storyBoard', [])

  .controller('storyCtrl', ['$scope', function ($scope){
 	$scope.storyTitle = "";
    $scope.storyContent = "";
    $scope.stories = {};

    $scope.myData = new Firebase("https://shining-inferno-9788.firebaseio.com/stories");

    $scope.saveStory = function(){
      $scope.myData.push({storyTitle:$scope.storyTitle, storyContent:$storyContent});
      $scope.storyTitle = "";
      $scope.storyContent = "";
    };

    $scope.myData.on('value', function(snapshot){
    	$scope.stories=snapshot.val();
    });

  }]);