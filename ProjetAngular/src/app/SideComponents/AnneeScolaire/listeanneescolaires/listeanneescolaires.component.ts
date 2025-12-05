import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AnneescolaireService} from "../../../Services/anneescolaire.service";
import {AnneeScolaire} from "../../../Models/AnneeScolaire";

@Component({
  selector: 'app-listeanneescolaires',
  templateUrl: './listeanneescolaires.component.html',
  styleUrls: ['./listeanneescolaires.component.css']
})
export class ListeanneescolairesComponent implements OnInit {

  listeAnneesScolaires: AnneeScolaire[];

  constructor (
        private router:Router,
        private anneeScolaireService: AnneescolaireService
  )
  {}

  ngOnInit() {
    this.anneeScolaireService.anneeScolaire().subscribe(
      (anneesScolaires) => this.listeAnneesScolaires = anneesScolaires
    )
  }

  ajouterAnnee(){
    this.router.navigate(["addannéescolaire/add"])
  }

  modifierAnneeScolaire(id: String) {
    this.router.navigate([`editeannée/edit/${id}`])
  }

  supprimerAnneeScolaire(anneeScolaire: AnneeScolaire) {
    this.anneeScolaireService.supprimerAnneeScolaire(anneeScolaire).subscribe()
    this.router.navigate(["listeannée"])
  }


}
