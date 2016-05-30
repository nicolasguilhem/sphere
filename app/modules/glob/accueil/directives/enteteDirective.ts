/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

  export class enteteDirective implements ng.IDirective {
    restrict = 'E';
    scope = {};
    templateUrl = 'app/modules/glob/accueil/views/entete.html';
  }

  export function enteteDirectiveFactory() {
    return new sphere.glob.accueil.enteteDirective();
  }

}

angular.module('sphere.glob.accueil')
  .directive('enteteDirective', sphere.glob.accueil.enteteDirectiveFactory);
