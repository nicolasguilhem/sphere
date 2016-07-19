/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {

	export class Spheres {

		public lstSphere: Array<Sphere>;

		constructor () {
		}
	}

	export class Sphere {

		public msLibelle: string;
		public lstTypCarac: Array<TypCarac>;

		constructor (psLibelle: string) {
			this.msLibelle = psLibelle;
		}
	}

	export class TypCarac {

		public msLibelle: string;
		public lstCarac: Array<Carac>;

		constructor (psLibelle: string) {
			this.msLibelle = psLibelle;
		}
	}

	export class Carac {

		public msLibelle: string;
		public miValeur: number;

		constructor (psLibelle: string, piValeur: number) {
			this.msLibelle = psLibelle;
			this.miValeur = piValeur;
		}
	}
}