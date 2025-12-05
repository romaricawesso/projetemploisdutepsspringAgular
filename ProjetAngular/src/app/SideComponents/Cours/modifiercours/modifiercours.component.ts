import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Cours} from "../../../Models/Cours";
import {Matieres} from "../../../Models/Matieres";
import {Enseignants} from "../../../Models/Enseignants";
import {AnneeScolaire} from "../../../Models/AnneeScolaire";
import {Classes} from "../../../Models/Classes";
import {CoursService} from "../../../Services/cours.service";
import {MatiereService} from "../../../Services/matiere.service";
import {EnseignantService} from "../../../Services/enseignant.service";
import {ClasseService} from "../../../Services/classe.service";
import {AnneescolaireService} from "../../../Services/anneescolaire.service";

@Component({
  selector: 'app-modifiercours',
  templateUrl: './modifiercours.component.html',
  styleUrls: ['./modifiercours.component.css']
})
export class ModifiercoursComponent implements OnInit{

  cours: Cours;

  // Liste des matières
  matieres: Matieres[]

  // Liste des enseignants
  enseignants: Enseignants[]

  // Liste des classes
  classes: Classes[]

  // Liste des années scolaires
  anneesScolaires: AnneeScolaire[]


  ngOnInit() {
    this.getCours();
    this.matiereService.matieres().subscribe(
      (matieres ) => this.matieres = matieres
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
    private route: ActivatedRoute,
    private coursService: CoursService,
    private matiereService: MatiereService,
    private enseignantService: EnseignantService,
    private classeService: ClasseService,
    private anneeScolaireService: AnneescolaireService
  ) {}

  private getCours() {
    const id = this.route.snapshot.paramMap.get("id");
    this.coursService.findCoursById(id).subscribe((cours) => this.cours = cours);
  }

  private modifierCoursEtNaviguer(cours: Cours) {
    this.coursService.modifierCours(cours).subscribe(() => {
      this.router.navigate(["listecours"]);
    });
  }

  onSubmit() {
    this.modifierCoursEtNaviguer(this.cours)
    this.router.navigate(["listecours"])
  }

}
