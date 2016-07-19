/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

	export class sphereCaracGroupController {

	  	private indiceSphere: number;
	  	private indiceTypCarac: number;
	  	private spheres: Spheres;
	  	private caracGroupCourant: TypCarac;

		constructor () {
			var sphereCourante = this.spheres.lstSphere[this.indiceSphere-1];
			this.caracGroupCourant  = sphereCourante.lstTypCarac[this.indiceTypCarac];
		}

		calculTypeFleche (): string {
			if (this.indiceTypCarac == 0) {
				return "Haut";
			} else {
				return "Bas";
			}
		}

		calculNumeroQuart (piIndent: number): number {
			return this.indiceTypCarac*2+piIndent;
		}
	}
}

angular.module('sphere.glob.accueil')
  .controller('sphereCaracGroupController', sphere.glob.accueil.sphereCaracGroupController);
