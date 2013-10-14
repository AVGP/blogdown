function PostListCtrl($scope, $routeParams, angularFireAuth, firebaseRef, Posts) {
  angularFireAuth.initialize(firebaseRef, {scope: $scope, name: "user"});
    
  $scope.login = function() {
    angularFireAuth.login("twitter");
  };
    
  $scope.logout = function() {
    angularFireAuth.logout();
  };
    
  $scope.posts = Posts;
  $scope.author = $routeParams.author;
}

function PostWriteCtrl($scope, $location, angularFireAuth, firebaseRef, Posts) {
  angularFireAuth.initialize(firebaseRef, {scope: $scope, name: "user"});
    
  $scope.post = { title: 'Add title', text: '##Add some content' };
  $scope.publish = function() {
    if(!$scope.user) return;
      
    $scope.post.author = $scope.user.id;      
    console.log($scope.user, $scope.post.author);      

    Posts.add($scope.post);
    //$location.path('/');
  };
}