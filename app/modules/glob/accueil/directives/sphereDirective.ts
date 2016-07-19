/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

  export class sphereDirective implements ng.IDirective {
    restrict = 'E';
    scope = {
    		indiceSphere : '=',
        spheres : '='
    		};
    controller = 'sphereController';
    controllerAs = 'sphereCtrl';
    bindToController = true;
    templateUrl = 'app/modules/glob/accueil/views/sphereDirective.html';
  }

  export function sphereDirectiveFactory() {
    return new sphere.glob.accueil.sphereDirective();
  }

}

angular.module('sphere.glob.accueil')
  .directive('sphereDirective', sphere.glob.accueil.sphereDirectiveFactory);
