/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

  export class sphereCaracGroupDirective implements ng.IDirective {
    restrict = 'E';
    scope = {
        indiceSphere : '=',
        indiceTypCarac : '=',
        spheres : '='
    		};
    controller = 'sphereCaracGroupController';
    controllerAs = 'sphereCaracGroupCtrl';
    bindToController = true;
    templateUrl = 'app/modules/glob/accueil/views/sphereCaracGroupDirective.html';
  }

  export function sphereCaracGroupDirectiveFactory() {
    return new sphere.glob.accueil.sphereCaracGroupDirective();
  }

}

angular.module('sphere.glob.accueil')
  .directive('sphereCaracGroupDirective', sphere.glob.accueil.sphereCaracGroupDirectiveFactory);
