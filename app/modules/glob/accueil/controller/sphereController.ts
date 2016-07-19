/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

	export class sphereController {

	  	private indiceSphere: number;

		constructor () {
			
		}
	  
	}
}

angular.module('sphere.glob.accueil')
  .controller('sphereController', sphere.glob.accueil.sphereController);
