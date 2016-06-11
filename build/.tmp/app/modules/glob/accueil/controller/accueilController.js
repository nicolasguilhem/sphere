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
                    this.carac11 = 10;
                    this.carac12 = 12;
                    this.carac13 = 13;
                    this.carac14 = 14;
                    this.carac21 = 10;
                    this.carac22 = 11;
                    this.carac23 = 23;
                    this.carac24 = 24;
                    this.carac31 = 30;
                    this.carac32 = 32;
                    this.carac33 = 33;
                    this.carac34 = 34;
                }
                return accueilController;
            })();
            accueil.accueilController = accueilController;
        })(accueil = glob.accueil || (glob.accueil = {}));
    })(glob = sphere.glob || (sphere.glob = {}));
})(sphere || (sphere = {}));
angular.module('sphere.glob.accueil')
    .controller('accueilController', sphere.glob.accueil.accueilController);
