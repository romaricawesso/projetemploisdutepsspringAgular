import { Component } from '@angular/core';
import {AnneescolaireService} from "../../../Services/anneescolaire.service";
import {Router} from "@angular/router";
import {AnneeScolaire} from "../../../Models/AnneeScolaire";

@Component({
  selector: 'app-ajouteranneescolaires',
  templateUrl: './ajouteranneescolaires.component.html',
  styleUrls: ['./ajouteranneescolaires.component.css']
})
export class AjouteranneescolairesComponent {

  anneeScolaire: AnneeScolaire = new AnneeScolaire(0, "", "", "")

  constructor(
    private router: Router,
    private anneeScolaireService: AnneescolaireService
  ) {}

  // onSubmit() {
  //   this.anneeScolaireService.ajouterAnneeScolaire(this.anneeScolaire).subscribe()
  //   this.router.navigate(["listeannée"])
  // }

  onSubmit() {
    this.anneeScolaireService.ajouterAnneeScolaire(this.anneeScolaire).subscribe(
      (annee:AnneeScolaire)=>{
        this.router.navigate(["listeannée"])
      }
    )

  }

}
