import {Component, OnInit} from '@angular/core';
import {Enseignants} from "../../../Models/Enseignants";
import {Cours} from "../../../Models/Cours";
import {Classes} from "../../../Models/Classes";
import {Router} from "@angular/router";
import {EnseignantService} from "../../../Services/enseignant.service";
import {CoursService} from "../../../Services/cours.service";
import {ClasseService} from "../../../Services/classe.service";
import {EmploisdutempsService} from "../../../Services/emploisdutemps.service";
import {forkJoin} from "rxjs";
import {EmploisDuTemps} from "../../../Models/EmploisDuTemps";

@Component({
  selector: 'app-ajouteremploisdutemps',
  templateUrl: './ajouteremploisdutemps.component.html',
  styleUrls: ['./ajouteremploisdutemps.component.css']
})
export class AjouteremploisdutempsComponent implements OnInit {


  // Liste des enseignants
  liste_enseignants: Enseignants[]
  enseignant_id: Number;
  enseignant: Enseignants;

  // Heure début et fin
  heure_debut: String = "";
  heure_fin: String = "";

  // Liste des cours
  liste_cours: Cours[]
  cours_id: Number;
  cours: Cours;

  // Liste des classes
  liste_classes: Classes[]
  classe_id: Number;
  classe: Classes;

  ngOnInit() {
    this.enseignantService.enseignants().subscribe(
      (enseignants) => this.liste_enseignants = enseignants
    );
    this.coursService.cours().subscribe(
      (cours) => this.liste_cours = cours
    );
    this.classeService.classe().subscribe(
      (classes) => this.liste_classes = classes
    );
  }

  constructor(
    private router: Router,
    private enseignantService: EnseignantService,
    private coursService: CoursService,
    private classeService: ClasseService,
    private emploiDuTempsService: EmploisdutempsService
  ) {}

  private createObject(): void {
    forkJoin({
      enseignant: this.enseignantService.findEnseignantById(this.enseignant_id.toString()),
      cours: this.coursService.findCoursById(this.cours_id.toString()),
      classe: this.classeService.findClasseById(this.classe_id.toString())
    }).subscribe(({enseignant, cours,classe}) => {
      const emploiDuTemps = new EmploisDuTemps(0, enseignant, cours, this.heure_debut, this.heure_fin, classe)
      this.ajouterCoursEtNaviguer(emploiDuTemps);
    });
  }

  private ajouterCoursEtNaviguer(emploiDuTemps: EmploisDuTemps) {
    this.emploiDuTempsService.ajouterEmplois(emploiDuTemps).subscribe(() => {
      this.router.navigate(["listeemplois"]);
    });
  }

  onSubmit() {
    this.createObject();
    this.router.navigate(["listeemplois"])
  }

}
