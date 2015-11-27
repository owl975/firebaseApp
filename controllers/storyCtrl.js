angular.module('storyBoard', [])

  .controller('storyCtrl', ['$scope', '$timeout', function ($scope, $timeout){
 	$scope.storyTitle = "";
    $scope.storyContent = "";
    $scope.stories = {};

    $scope.myData = new Firebase("https://shining-inferno-9788.firebaseio.com/Stories");

    $scope.saveStory = function(){
      $scope.myData.push({storyTitle:$scope.storyTitle, storyContent:$scope.storyContent});
      $scope.storyTitle = "";
      $scope.storyContent = "";
    };
   
    $scope.myData.on('value', function(snapshot) {
    	$timeout(function(){
    		$scope.stories = snapshot.val();
    	});
    });
     

  }]);