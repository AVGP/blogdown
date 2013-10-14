var writedown = angular.module('writedown',['firebase', 'angular-markdown'])
  .value('firebaseRef', new Firebase('https://blogdown.firebaseio.com/posts'))
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $routeProvider.when('/write', {controller: PostWriteCtrl, templateUrl: 'views/write.html'});
    $routeProvider.when('/blog/:author', {controller: PostListCtrl, templateUrl: 'views/home.html'});
    $routeProvider.otherwise({redirectTo: '/blog/'});
    $locationProvider.html5Mode(false);
  }]);  
