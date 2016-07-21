/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

	export class sphereCompetencesController {

	  	private indiceSphere: number;
	  	private spheres: Spheres;
	  	private sphereCourante: Sphere;
	  	private lstCompetenceCourante: Array<Competence>;

		constructor () {
			this.sphereCourante = this.spheres.lstSphere[this.indiceSphere-1];
			this.lstCompetenceCourante = this.sphereCourante.lstCompetence;
		}
	}
}

angular.module('sphere.glob.accueil')
  .controller('sphereCompetencesController', sphere.glob.accueil.sphereCompetencesController);
