/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {


	export class accueilController {

		private spheres: Spheres;

	  private carac11: Number;
	  private carac12: Number;
	  private carac13: Number;
	  private carac14: Number;

	  private carac21: Number;
	  private carac22: Number;
	  private carac23: Number;
	  private carac24: Number;

	  private carac31: Number;
	  private carac32: Number;
	  private carac33: Number;
	  private carac34: Number;

	  constructor () {
		  this.carac11 = 10;
		  this.carac12 = 12;
		  this.carac13 = 13;
		  this.carac14 = 14;
		  
		  this.carac21 = 10;
		  this.carac22 = 11;
		  this.carac23 = 23;
		  this.carac24 = 24;
		  
		  this.carac31 = 30;
		  this.carac32 = 32;
		  this.carac33 = 33;
		  this.carac34 = 34;

		  this.spheres = new Spheres();
		  var sphere1 = new Sphere('physique');

		  var TypCarac11 = new TypCarac('attaque');
		  TypCarac11.lstCarac = [new Carac('martialité',11), new Carac('force',12)];

		  var TypCarac12 = new TypCarac('défense');
		  TypCarac12.lstCarac = [new Carac('mobilité',21), new Carac('solidité',22)];

		  sphere1.lstTypCarac = [TypCarac11, TypCarac12];

		  var sphere2 = new Sphere('sensorielle');

		  var TypCarac21 = new TypCarac('attaque');
		  TypCarac21.lstCarac = [new Carac('perception',11), new Carac('précision',12)];

		  var TypCarac22 = new TypCarac('défense');
		  TypCarac22.lstCarac = [new Carac('anticipation',21), new Carac('équilibre',22)];

		  sphere2.lstTypCarac = [TypCarac21, TypCarac22];

		  var sphere3 = new Sphere('psychique');

		  var TypCarac31 = new TypCarac('attaque');
		  TypCarac31.lstCarac = [new Carac('sagacité',11), new Carac('énergie',12)];

		  var TypCarac32 = new TypCarac('défense');
		  TypCarac32.lstCarac = [new Carac('conscience',21), new Carac('absorption',22)];

		  sphere3.lstTypCarac = [TypCarac31, TypCarac32];

		  this.spheres.lstSphere = [sphere1, sphere2, sphere3];
      }
	  
  }
}

angular.module('sphere.glob.accueil')
  .controller('accueilController', sphere.glob.accueil.accueilController);
