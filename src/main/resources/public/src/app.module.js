

/*var myapp = angular.module("myapp", ['ui.router','app.tapi','ngStorage','app.pronetwork']);*/
var myapp = angular.module("myapp", ['ui.router','ngStorage','app.tapi']);
angular.module('app.tapi', []);

myapp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/upsertStatement');
    $stateProvider

        .state('upsertStatement', {
            //  Posts state. This state will contain nested views
            url: '/upsertStatement',
            templateUrl: 'src/modules/views/upsertView.html'
        })
        .state('dashboard', {
            //  Posts state. This state will contain nested views
            url: '/dashboard',
            templateUrl: 'src/modules/views/dashboard.html'
        })
        .state('ddlStatement', {
            //  Posts state. This state will contain nested views
            url: '/ddlStatement',
            templateUrl: 'src/modules/views/ddlView.html'
        })
	    .state('queryView', {
	        //  Posts state. This state will contain nested views
	        url: '/queryView',
	        templateUrl: 'src/modules/views/queryView.html'
	    })
	    .state('table', {
	        //  Posts state. This state will contain nested views
	        url: '/table',
	        templateUrl: 'src/modules/views/table.html'
	    });



});


