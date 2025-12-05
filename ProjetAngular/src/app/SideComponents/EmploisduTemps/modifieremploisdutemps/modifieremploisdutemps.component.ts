import {Component, OnInit} from '@angular/core';
import {EmploisDuTemps} from "../../../Models/EmploisDuTemps";
import {Enseignants} from "../../../Models/Enseignants";
import {Cours} from "../../../Models/Cours";
import {Classes} from "../../../Models/Classes";
import {ActivatedRoute, Router} from "@angular/router";
import {EnseignantService} from "../../../Services/enseignant.service";
import {CoursService} from "../../../Services/cours.service";
import {ClasseService} from "../../../Services/classe.service";
import {EmploisdutempsService} from "../../../Services/emploisdutemps.service";

@Component({
  selector: 'app-modifieremploisdutemps',
  templateUrl: './modifieremploisdutemps.component.html',
  styleUrls: ['./modifieremploisdutemps.component.css']
})
export class ModifieremploisdutempsComponent implements OnInit {

  emploiDuTemps: EmploisDuTemps;

  // Liste des enseignants
  liste_enseignants: Enseignants[]

  // Liste des cours
  liste_cours: Cours[]

  // Liste des classes
  liste_classes: Classes[]

  ngOnInit() {
    this.getEmploiDuTemps();
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
    private route: ActivatedRoute,
    private enseignantService: EnseignantService,
    private coursService: CoursService,
    private classeService: ClasseService,
    private emploiDuTempsService: EmploisdutempsService
  ) {}

  private getEmploiDuTemps() {
    const id = this.route.snapshot.paramMap.get("id");
    this.emploiDuTempsService.findEmploisById(id).subscribe((emploiDuTemps) => this.emploiDuTemps = emploiDuTemps);
  }

  private modifierEmploiDuTempsEtNaviguer(emploiDuTemps: EmploisDuTemps) {
    this.emploiDuTempsService.modifierEmplois(emploiDuTemps).subscribe(() => {
      this.router.navigate(["listeemplois"]);
    });
  }

  onSubmit() {
    let response  = confirm("Etes-vous sur ?")
    if (response) {
      this.modifierEmploiDuTempsEtNaviguer(this.emploiDuTemps)
      this.router.navigate(["listeemplois"])
    }
  }
}
