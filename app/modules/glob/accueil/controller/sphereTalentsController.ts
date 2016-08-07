/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

	export class sphereTalentsController {

	  	private indiceSphere: number;
	  	private spheres: Spheres;
	  	private sphereCourante: Sphere;
	  	private lstTalentCourant: Array<Talent>;


		constructor () {
			this.sphereCourante = this.spheres.lstSphere[this.indiceSphere-1];
			this.lstTalentCourant = this.sphereCourante.lstTalent;
		}
	  
	}
}

angular.module('sphere.glob.accueil')
  .controller('sphereTalentsController', sphere.glob.accueil.sphereTalentsController);
