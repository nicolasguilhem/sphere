/// <reference path="../accueil.ts" />
'use strict';
var sphere;
(function (sphere) {
    var glob;
    (function (glob) {
        var accueil;
        (function (accueil) {
            var accueilController = (function () {
                function accueilController() {
                }
                return accueilController;
            })();
            accueil.accueilController = accueilController;
        })(accueil = glob.accueil || (glob.accueil = {}));
    })(glob = sphere.glob || (sphere.glob = {}));
})(sphere || (sphere = {}));
angular.module('sphere.glob.accueil')
    .controller('accueilController', sphere.glob.accueil.accueilController);
