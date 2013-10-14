writedown.factory('Posts', function(angularFireCollection, firebaseRef) {
  return angularFireCollection(firebaseRef);
});