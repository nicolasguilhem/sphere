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
		public lstCompetence: Array<Competence>;
		public lstTalent: Array<Talent>;

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

	export class Competence {

		public msLibelle: string;
		public msDescri: string;
		public miValeur: number;
		public moCarac: Carac;
		public mbSpecial: boolean;

		constructor (psLibelle: string, psDescri: string, pbSpecial: boolean, piValeur: number, poCarac: Carac) {
			this.msLibelle = psLibelle;
			this.msDescri = psDescri;
			this.miValeur = piValeur;
			this.moCarac = poCarac;
			this.mbSpecial = pbSpecial;
		}
	}

	export class Talent {

		public msLibelle: string;
		public msDescri: string;
		public msCout: string;
		public msDifficulte: string;
		public miValeur: number;
		public moCarac: Carac;

		constructor (psLibelle: string, psDescri: string, psCout: string, psDifficulte: string, piValeur: number, poCarac: Carac) {
			this.msLibelle = psLibelle;
			this.msDescri = psDescri;
			this.msCout = psCout;
			this.msDifficulte = psDifficulte;
			this.miValeur = piValeur;
			this.moCarac = poCarac;
		}
	}
}