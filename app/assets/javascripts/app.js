'use strict';

// Angular setup
var tooglesApp = angular.module('tooglesApp', ['ngSanitize'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/browse', { templateUrl: 'templates/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/browse/:category', { templateUrl: 'templates/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/search/:query', { templateUrl: 'templates/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/view/:id', { templateUrl: 'templates/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/playlist/:id', { templateUrl: 'templates/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/playlist/:id/:start', { templateUrl: 'templates/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/user/:username', { templateUrl: 'templates/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/user/:username/:feed', { templateUrl: 'templates/list.html', controller: 'ListCtrl' });
    $routeProvider.otherwise({ redirectTo: '/browse' });
  }])
	// .run(["$window", '$templateCache', function($window, $templateCache){
	// 	
	// 	var templates = $window.JST,
	// 		fileName,
	// 		fileContent; 
	// 	
	// 	
	// 	console.log("The templates");
	// 	console.log( templates ) ;
	// 	for( fileName in templates){
	// 		console.log("The filename: " + fileName);
	// 		fileContent = templates[fileName];
	// 		$templateCache.put( fileName, fileContent )
	// 	}
	// }]);
