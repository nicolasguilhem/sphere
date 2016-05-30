/// <reference path="../accueil.ts" />
'use strict';
var sphere;
(function (sphere) {
    var glob;
    (function (glob) {
        var accueil;
        (function (accueil) {
            var enteteDirective = (function () {
                function enteteDirective() {
                    this.restrict = 'E';
                    this.scope = {};
                    this.templateUrl = 'app/modules/glob/accueil/views/entete.html';
                }
                return enteteDirective;
            })();
            accueil.enteteDirective = enteteDirective;
            function enteteDirectiveFactory() {
                return new sphere.glob.accueil.enteteDirective();
            }
            accueil.enteteDirectiveFactory = enteteDirectiveFactory;
        })(accueil = glob.accueil || (glob.accueil = {}));
    })(glob = sphere.glob || (sphere.glob = {}));
})(sphere || (sphere = {}));
angular.module('sphere.glob.accueil')
    .directive('enteteDirective', sphere.glob.accueil.enteteDirectiveFactory);
