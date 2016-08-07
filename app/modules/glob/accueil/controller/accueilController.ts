/// <reference path="../accueil.ts" />

'use strict';

module sphere.glob.accueil {


	export class accueilController {

		private spheres: Spheres;

	  	constructor () {

			this.spheres = new Spheres();
			var sphere1 = new Sphere('physique');

			var TypCarac11 = new TypCarac('attaque');
			TypCarac11.lstCarac = [new Carac('martialité',11), new Carac('force',12)];

			var TypCarac12 = new TypCarac('défense');
			TypCarac12.lstCarac = [new Carac('mobilité',21), new Carac('solidité',22)];

			sphere1.lstTypCarac = [TypCarac11, TypCarac12];

			var Comp111 = new Competence('Coordination', '(Immobilisation / Souplesse)', false, 6,  TypCarac11.lstCarac[0]);
			var Comp112 = new Competence('Minutie', '(Subtilisation / Crochetage / Désamorçage)', true, 6,  TypCarac11.lstCarac[0]);

			var Comp121 = new Competence('Levage', '(Levée / Sortie de saisie / Escalade)', false, 6,  TypCarac11.lstCarac[1]);
			var Comp122 = new Competence('Intimidation', '(Dissuasion / Malus de combat)', true, 6,  TypCarac11.lstCarac[1]);

			var Comp131 = new Competence('Athlétisme', '(Sprint / Endurance / Natation / Saut)', false, 6,  TypCarac12.lstCarac[0]);
			var Comp132 = new Competence('Discrétion', '(Déplacements discrets)', true, 6,  TypCarac12.lstCarac[0]);

			var Comp141 = new Competence('Santé', '(Résistance physique / Résistance saisie)', false, 6,  TypCarac12.lstCarac[1]);
			var Comp142 = new Competence('Bélier', '(Enfoncer une structure / Renverser créature)', true, 6,  TypCarac12.lstCarac[1]);

			sphere1.lstCompetence = [Comp111, Comp112, Comp121, Comp122, Comp131, Comp132, Comp141, Comp142];

			var sphere2 = new Sphere('sensorielle');

			var TypCarac21 = new TypCarac('attaque');
			TypCarac21.lstCarac = [new Carac('perception',11), new Carac('précision',12)];

			var TypCarac22 = new TypCarac('défense');
			TypCarac22.lstCarac = [new Carac('anticipation',21), new Carac('équilibre',22)];

			sphere2.lstTypCarac = [TypCarac21, TypCarac22];

			var Comp211 = new Competence('Repérage', '(Observation / Détection)', false, 6,  TypCarac21.lstCarac[0]);
			var Comp212 = new Competence('Astuce', '(Camouflage / Déguisement / Falsification)', true, 6,  TypCarac21.lstCarac[0]);

			var Comp221 = new Competence('Pistage', '(Lecture de piste / Fausse piste)', false, 6,  TypCarac21.lstCarac[1]);
			var Comp222 = new Competence('Rôdeur', '(Pieds légers / Affinage)', true, 6,  TypCarac21.lstCarac[1]);

			var Comp231 = new Competence('Réflexe', '(Esquiver un danger / Attraper objet ou personne)', false, 6,  TypCarac22.lstCarac[0]);
			var Comp232 = new Competence('Survie', '(Orientation / Techniques de survies)', true, 6,  TypCarac22.lstCarac[0]);

			var Comp241 = new Competence('Stabilité', '(Équitation / Rester stable)', false, 6,  TypCarac22.lstCarac[1]);
			var Comp242 = new Competence('Acrobatie', '(Réception / Dégagement / Déplacements)', true, 6,  TypCarac22.lstCarac[1]);

			sphere2.lstCompetence = [Comp211, Comp212, Comp221, Comp222, Comp231, Comp232, Comp241, Comp242];

			var talent1 = new Talent ('Tire en mouvement', 'Inflige [DBASE] et gagne un déplacement (sortie de CaC OK)',
				'4', '8 + X (terrain)', 6, TypCarac21.lstCarac[0]);
			var talent2 = new Talent ('Tire en pleine tête', 'Inflige [DBASE] et gagne un déplacement (sortie de CaC OK)',
							'4', '10', 6, TypCarac21.lstCarac[0]);
			var talent3 = new Talent ('Tire dans le bide', 'Inflige [DBASE] et gagne un déplacement (sortie de CaC OK)',
										'4', '10', 6, TypCarac21.lstCarac[1]);

			sphere2.lstTalent = [talent1, talent3, talent2];

			var sphere3 = new Sphere('psychique');

			var TypCarac31 = new TypCarac('attaque');
			TypCarac31.lstCarac = [new Carac('sagacité',11), new Carac('énergie',12)];

			var TypCarac32 = new TypCarac('défense');
			TypCarac32.lstCarac = [new Carac('conscience',21), new Carac('absorption',22)];

			sphere3.lstTypCarac = [TypCarac31, TypCarac32];

			var Comp311 = new Competence('Savoir', '(Connaissances / Persuasion / Discours)', false, 6,  TypCarac31.lstCarac[0]);
			var Comp312 = new Competence('Commerce', '(Marchandage / Sens des affaires)', true, 6,  TypCarac31.lstCarac[0]);

			var Comp321 = new Competence('Impulsion', '(Sondage psychique / Lumière)', false, 6,  TypCarac31.lstCarac[1]);
			var Comp322 = new Competence('Spiritisme', '(Invocation / Divination)', true, 6,  TypCarac31.lstCarac[1]);

			var Comp331 = new Competence('Ressenti', '(Recherche psychique / Détection psychique)', false, 6,  TypCarac32.lstCarac[0]);
			var Comp332 = new Competence('Perturbation', '(Masquage psychique / Contre psychique)', true, 6,  TypCarac32.lstCarac[0]);

			var Comp341 = new Competence('Volonté', '(Résistance psychique)', false, 6,  TypCarac32.lstCarac[1]);
			var Comp342 = new Competence('Dissipation', '(Assimilation / Bannissement)', true, 6,  TypCarac32.lstCarac[1]);

			sphere3.lstCompetence = [Comp311, Comp312, Comp321, Comp322, Comp331, Comp332, Comp341, Comp342];

			this.spheres.lstSphere = [sphere1, sphere2, sphere3];
      	}
	  
  	}
}

angular.module('sphere.glob.accueil')
  .controller('accueilController', sphere.glob.accueil.accueilController);
