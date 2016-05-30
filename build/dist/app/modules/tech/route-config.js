/// <reference path="tech.ts" />
'use strict';
var sphere;
(function (sphere) {
    var tech;
    (function (tech) {
        var config = (function () {
            function config() {
            }
            config.routeConfig = function ($routeProvider, $locationProvider) {
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
            };
            return config;
        })();
        tech.config = config;
    })(tech = sphere.tech || (sphere.tech = {}));
})(sphere || (sphere = {}));
angular.module('sphere').config(['$routeProvider', '$locationProvider',
    sphere.tech.config.routeConfig
]);
