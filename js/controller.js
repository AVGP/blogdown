function PostListCtrl($scope, Posts) {
  $scope.posts = Posts;
}

function PostWriteCtrl($scope, $location, Posts) {
  $scope.post = {title: 'Add title', text: '##Add some content'};
  $scope.publish = function() {
    Posts.push($scope.post);
    $location.path('/');
  };
}