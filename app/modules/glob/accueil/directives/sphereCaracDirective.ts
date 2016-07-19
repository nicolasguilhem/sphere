/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

  export class sphereCaracDirective implements ng.IDirective {
    restrict = 'E';
    scope = {
    		indiceSphere : '=',
        spheres : '='
    		};
    controller = 'sphereCaracController';
    controllerAs = 'sphereCaracCtrl';
    bindToController = true;
    templateUrl = 'app/modules/glob/accueil/views/sphereCaracDirective.html';
  }

  export function sphereCaracDirectiveFactory() {
    return new sphere.glob.accueil.sphereCaracDirective();
  }

}

angular.module('sphere.glob.accueil')
  .directive('sphereCaracDirective', sphere.glob.accueil.sphereCaracDirectiveFactory);
