/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {


	export class accueilController {

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
      }
	  
  }
}

angular.module('sphere.glob.accueil')
  .controller('accueilController', sphere.glob.accueil.accueilController);
