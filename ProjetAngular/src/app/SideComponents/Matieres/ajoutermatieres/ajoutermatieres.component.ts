import { Component } from '@angular/core';
import {Matieres} from "../../../Models/Matieres";
import {Router} from "@angular/router";
import {MatiereService} from "../../../Services/matiere.service";

@Component({
  selector: 'app-ajoutermatieres',
  templateUrl: './ajoutermatieres.component.html',
  styleUrls: ['./ajoutermatieres.component.css']
})
export class AjoutermatieresComponent {

  matiere: Matieres = new Matieres(0, "", "")

  constructor(
    private router: Router,
    private matiereService: MatiereService
  ) {
  }

  onSubmit() {
    this.matiereService.ajouterMatiere(this.matiere).subscribe()
    this.router.navigate(["listematieres"])
  }

}
