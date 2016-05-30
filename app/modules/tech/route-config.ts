/// <reference path="tech.ts" />

'use strict';

module sphere.tech {
	
	export class config {
		
		static routeConfig($routeProvider: angular.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
	 		$routeProvider
				.when('/accueil', {
		          templateUrl: 'app/modules/glob/accueil/views/accueil.html',
		          controller: 'accueilController',
		          controllerAs: 'accueilCtrl'
		        })
		        .otherwise({
		          redirectTo: '/accueil'
		        });
			
			 $locationProvider.html5Mode(true);
		}
	}
}
	

angular.module('sphere').config(['$routeProvider', '$locationProvider',
                                     sphere.tech.config.routeConfig
									]);	
