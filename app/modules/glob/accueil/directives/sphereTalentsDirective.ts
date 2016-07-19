/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

  export class sphereTalentsDirective implements ng.IDirective {
    restrict = 'E';
    scope = {
    		indiceSphere : '=',
        spheres : '='
    		};
    controller = 'sphereTalentsController';
    controllerAs = 'sphereTalentsCtrl';
    bindToController = true;
    templateUrl = 'app/modules/glob/accueil/views/sphereTalentsDirective.html';
  }

  export function sphereTalentsDirectiveFactory() {
    return new sphere.glob.accueil.sphereTalentsDirective();
  }

}

angular.module('sphere.glob.accueil')
  .directive('sphereTalentsDirective', sphere.glob.accueil.sphereTalentsDirectiveFactory);
