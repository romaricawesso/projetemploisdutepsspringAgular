import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Cours} from "../../../Models/Cours";
import {Matieres} from "../../../Models/Matieres";
import {Enseignants} from "../../../Models/Enseignants";
import {AnneeScolaire} from "../../../Models/AnneeScolaire";
import {Classes} from "../../../Models/Classes";
import {forkJoin} from "rxjs";
import {CoursService} from "../../../Services/cours.service";
import {EnseignantService} from "../../../Services/enseignant.service";
import {AnneescolaireService} from "../../../Services/anneescolaire.service";
import {MatiereService} from "../../../Services/matiere.service";
import {ClasseService} from "../../../Services/classe.service";

@Component({
  selector: 'app-ajoutercours',
  templateUrl: './ajoutercours.component.html',
  styleUrls: ['./ajoutercours.component.css']
})
export class AjoutercoursComponent implements OnInit{
  // Liste des matières
  matieres: Matieres[]
  matiere_id: Number;
  matiere: Matieres;

  // Liste des enseignants
  enseignants: Enseignants[]
  enseignant_id: Number;
  enseignant: Enseignants;

  // Liste des classes
  classes: Classes[]
  classe_id: Number;
  classe: Classes;

  // Liste des années scolaires
  anneesScolaires: AnneeScolaire[]
  annee_scolaire_id: Number;
  annee_scolaire: AnneeScolaire;

  ngOnInit() {
    this.matiereService.matieres().subscribe(
      (matieres) => this.matieres = matieres
    );
    this.enseignantService.enseignants().subscribe(
      (enseignants) => this.enseignants = enseignants
    );
    this.classeService.classe().subscribe(
      (classes) => this.classes = classes
    );
    this.anneeScolaireService.anneeScolaire().subscribe(
      (anneescolaires) => this.anneesScolaires = anneescolaires
    );
  }

  constructor(
    private router: Router,
    private coursService: CoursService,
    private matiereService: MatiereService,
    private enseignantService: EnseignantService,
    private classeService: ClasseService,
    private anneeScolaireService: AnneescolaireService
  ) {}

  private createObject(): void {
    forkJoin({
      matiere: this.matiereService.findMatiereById(this.matiere_id.toString()),
      enseignant: this.enseignantService.findEnseignantById(this.enseignant_id.toString()),
      classe: this.classeService.findClasseById(this.classe_id.toString()),
      anneeScolaire: this.anneeScolaireService.findAnneeScolaireById(this.annee_scolaire_id.toString())
    }).subscribe(({matiere, enseignant, classe, anneeScolaire}) => {
      const cours = new Cours(0, anneeScolaire, classe, enseignant, matiere);
      this.ajouterCoursEtNaviguer(cours);
    });
  }

  private ajouterCoursEtNaviguer(cours: Cours) {
    this.coursService.ajouterCours(cours).subscribe(() => {
      this.router.navigate(["listecours"]);
    });
  }

  onSubmit() {
    this.createObject();
    this.router.navigate(["listecours"])
  }






}
