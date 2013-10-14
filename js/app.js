var writedown = angular.module('writedown',['firebase', 'angular-markdown'])
  .value('firebaseURL', 'https://blogdown.firebaseio.com/')
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $routeProvider.when('/', {controller: PostListCtrl, templateUrl: 'views/home.html'});
    $routeProvider.when('/write', {controller: PostWriteCtrl, templateUrl: 'views/write.html'});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(false);
  }]);  
