/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

	export class sphereCaracController {

	  	private indiceSphere: number;
	  	private spheres: Spheres;
	  	private sphereCourante: Sphere;

		constructor () {
			this.sphereCourante = this.spheres.lstSphere[this.indiceSphere-1];
		}
	  
	}
}

angular.module('sphere.glob.accueil')
  .controller('sphereCaracController', sphere.glob.accueil.sphereCaracController);
