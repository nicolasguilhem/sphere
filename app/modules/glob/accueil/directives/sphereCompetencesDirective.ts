/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

  export class sphereCompetencesDirective implements ng.IDirective {
    restrict = 'E';
    scope = {
    		indiceSphere : '=',
        spheres : '='
    		};
    controller = 'sphereCompetencesController';
    controllerAs = 'sphereCompetencesCtrl';
    bindToController = true;
    templateUrl = 'app/modules/glob/accueil/views/sphereCompetencesDirective.html';
  }

  export function sphereCompetencesDirectiveFactory() {
    return new sphere.glob.accueil.sphereCompetencesDirective();
  }

}

angular.module('sphere.glob.accueil')
  .directive('sphereCompetencesDirective', sphere.glob.accueil.sphereCompetencesDirectiveFactory);
