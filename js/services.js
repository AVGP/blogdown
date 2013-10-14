writedown.factory('Posts', function(angularFireCollection, firebaseURL) {
  return angularFireCollection(firebaseURL + '/posts');
});