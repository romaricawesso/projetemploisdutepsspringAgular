import {Component, OnInit} from '@angular/core';
import {EnseignantService} from "../../Services/enseignant.service";
import {MatiereService} from "../../Services/matiere.service";
import {ClasseService} from "../../Services/classe.service";
import {AnneescolaireService} from "../../Services/anneescolaire.service";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{



  nombreEnseignant: Number;
  nombreMatiere: Number;
  nombreClasse: Number;
  nombreAnneeScolaire: Number

  ngOnInit() {
    this.enseignantService.enseignants().subscribe(
      (enseignants) => this.nombreEnseignant = enseignants.length
    );
    this.matiereService.matieres().subscribe(
      (matieres) => this.nombreMatiere = matieres.length
    );
    this.classeService.classe().subscribe(
      (classes) => this.nombreClasse = classes.length
    );
    this.anneeScolaireService.anneeScolaire().subscribe(
      (anneesscolaires) => this.nombreAnneeScolaire = anneesscolaires.length
    )
  }

  constructor(
    private enseignantService: EnseignantService,
    private matiereService: MatiereService,
    private classeService: ClasseService,
    private anneeScolaireService: AnneescolaireService
) {}

}

